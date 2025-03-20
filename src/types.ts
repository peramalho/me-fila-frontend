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
