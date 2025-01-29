// チャットメッセージの基本インターフェース
export interface BaseMessage {
  timestamp: number;
  message: string;
}

// ユーザーメッセージ
export interface UserMessage extends BaseMessage {
  userId: string;
  clientId: string;
}

// AIペルソナメッセージ
export interface AiPersonaMessage extends BaseMessage {
  personaId: string;
  personaType: AiPersonaType;
}

// 進行制御メッセージ
export interface ControlMessage {
  type: ControlMessageType;
  data: any;
  timestamp: number;
}

// AIペルソナの種類
export enum AiPersonaType {
  CRITIC = 'critic',           // 批判分析
  DEVELOPER = 'developer',     // 発展的思考
  QUESTIONER = 'questioner',   // 質問提起
  SUMMARIZER = 'summarizer',   // まとめ役
  PRACTITIONER = 'practitioner', // 実務視点
  CREATOR = 'creator',         // 創造的発想
  MEDIATOR = 'mediator',       // 調整役
  ORGANIZER = 'organizer',     // 体系化
}

// 制御メッセージの種類
export enum ControlMessageType {
  START_DISCUSSION = 'START_DISCUSSION',
  END_DISCUSSION = 'END_DISCUSSION',
  NEXT_SPEAKER = 'NEXT_SPEAKER',
  PAUSE_DISCUSSION = 'PAUSE_DISCUSSION',
  RESUME_DISCUSSION = 'RESUME_DISCUSSION',
}

// WebSocketイベントの種類
export enum WebSocketEvents {
  // クライアントからサーバーへのイベント
  CHAT_MESSAGE = 'chatMessage',
  AI_PERSONA_MESSAGE = 'aiPersonaMessage',
  CONTROL_MESSAGE = 'controlMessage',
  
  // サーバーからクライアントへのイベント
  NEW_MESSAGE = 'newMessage',
  NEW_AI_MESSAGE = 'newAiMessage',
  CONTROL_UPDATE = 'controlUpdate',
  ERROR = 'error',
}

// エラーレスポンス
export interface ErrorResponse {
  code: string;
  message: string;
  timestamp: number;
}
