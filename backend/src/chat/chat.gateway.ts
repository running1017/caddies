import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';
import {
  UserMessage,
  AiPersonaMessage,
  ControlMessage,
  WebSocketEvents,
  ErrorResponse,
} from './types/chat.types';

@WebSocketGateway({
  cors: {
    origin: '*', // 開発環境用の設定。本番環境では適切なオリジンを指定する
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private logger = new Logger('ChatGateway');
  private activeClients: Map<string, Socket> = new Map();

  // クライアント接続時の処理
  async handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
    this.activeClients.set(client.id, client);

    // 接続数の確認（パフォーマンス要件：100接続以上）
    this.logger.log(`Active connections: ${this.activeClients.size}`);
  }

  // クライアント切断時の処理
  async handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
    this.activeClients.delete(client.id);
  }

  // チャットメッセージ受信時の処理
  @SubscribeMessage(WebSocketEvents.CHAT_MESSAGE)
  async handleMessage(client: Socket, payload: Omit<UserMessage, 'clientId'>) {
    try {
      // メッセージ処理能力要件：10メッセージ/秒以上
      this.logger.log(`Message received from ${client.id}: ${payload.message}`);
      
      // 全クライアントにメッセージをブロードキャスト
      const message: UserMessage = {
        ...payload,
        clientId: client.id,
      };
      this.server.emit(WebSocketEvents.NEW_MESSAGE, message);
    } catch (error) {
      const errorResponse: ErrorResponse = {
        code: 'MESSAGE_HANDLING_ERROR',
        message: error.message,
        timestamp: Date.now(),
      };
      client.emit(WebSocketEvents.ERROR, errorResponse);
    }
  }

  // AIペルソナの発言制御
  @SubscribeMessage(WebSocketEvents.AI_PERSONA_MESSAGE)
  async handleAiPersonaMessage(client: Socket, payload: AiPersonaMessage) {
    try {
      this.logger.log(`AI Persona ${payload.personaId} message: ${payload.message}`);
      
      // AIペルソナのメッセージを全クライアントに送信
      this.server.emit(WebSocketEvents.NEW_AI_MESSAGE, payload);
    } catch (error) {
      const errorResponse: ErrorResponse = {
        code: 'AI_MESSAGE_HANDLING_ERROR',
        message: error.message,
        timestamp: Date.now(),
      };
      client.emit(WebSocketEvents.ERROR, errorResponse);
    }
  }

  // 進行エージェントによる制御メッセージ
  @SubscribeMessage(WebSocketEvents.CONTROL_MESSAGE)
  async handleControlMessage(client: Socket, payload: ControlMessage) {
    try {
      this.logger.log(`Control message received: ${payload.type}`);
      
      // 制御メッセージを全クライアントに送信
      this.server.emit(WebSocketEvents.CONTROL_UPDATE, payload);
    } catch (error) {
      const errorResponse: ErrorResponse = {
        code: 'CONTROL_MESSAGE_ERROR',
        message: error.message,
        timestamp: Date.now(),
      };
      client.emit(WebSocketEvents.ERROR, errorResponse);
    }
  }
}
