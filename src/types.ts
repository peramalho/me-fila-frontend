export type User = {
  id: string;
  name?: string;
  participatedRoomId: string;
};

export type Room = {
  id: string;
  name: string;
  participants: User[];
};

export type SuccessResponse<T> = {
  data: T;
  error: null;
};

export type ErrorResponse = {
  data: null;
  error: { message: string; code: number };
};
