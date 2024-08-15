export interface Chat {
  id: string;
  author: string;
  message: string;
  createdAt: string;
}

export interface MessageMutation {
  author: string;
  message: string;
  createdAt: string;
}