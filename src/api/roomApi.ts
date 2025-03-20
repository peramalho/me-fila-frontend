import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { API_METHOD, API_ROUTES } from "../constants/apiRoutes";
import { fetchData } from "./fetchData";
import { Room } from "../types";

export function useCreateRoomMutation(
  options: UseMutationOptions<Room, Error, { name: string }>
) {
  return useMutation<Room, Error, { name: string }>({
    ...options,
    mutationFn: ({ name }) =>
      fetchData({
        url: API_ROUTES.ROOM,
        method: API_METHOD.POST,
        body: { name },
      }),
  });
}

export function useDeleteRoomMutation(
  options: UseMutationOptions<null, Error, { roomId: string }>
) {
  return useMutation<null, Error, { roomId: string }>({
    ...options,
    mutationFn: ({ roomId }) =>
      fetchData({
        url: API_ROUTES.ROOM_ID.replace(":id", roomId),
        method: API_METHOD.DELETE,
      }),
  });
}
