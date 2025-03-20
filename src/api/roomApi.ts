import { useMutation } from "@tanstack/react-query";
import { API_METHOD, API_ROUTES } from "../constants/apiRoutes";
import { fetchData } from "./fetchData";
import { Room } from "../types";

export function useCreateRoomMutation() {
  return useMutation<Room>({
    mutationFn: () =>
      fetchData({ url: API_ROUTES.ROOM, method: API_METHOD.POST }),
  });
}

export function useDeleteRoomMutation() {
  return useMutation<null, Error, { roomId: string }>({
    mutationFn: ({ roomId }) =>
      fetchData({
        url: API_ROUTES.ROOM_ID.replace(":id", roomId),
        method: API_METHOD.DELETE,
      }),
  });
}
