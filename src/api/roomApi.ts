import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { API_METHOD, API_ROUTES } from "../constants/apiRoutes";
import { fetchData } from "./fetchData";
import { Room, SuccessResponse } from "../types";
import { ErrorResponse } from "react-router";

export function useCreateRoomMutation(
  options: UseMutationOptions<
    SuccessResponse<{ room: Room }>,
    ErrorResponse,
    { name: string }
  >
) {
  return useMutation<
    SuccessResponse<{ room: Room }>,
    ErrorResponse,
    { name: string }
  >({
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
  options: UseMutationOptions<
    SuccessResponse<null>,
    ErrorResponse,
    { roomId: string }
  >
) {
  return useMutation<SuccessResponse<null>, ErrorResponse, { roomId: string }>({
    ...options,
    mutationFn: ({ roomId }) =>
      fetchData({
        url: API_ROUTES.ROOM_ID.replace(":id", roomId),
        method: API_METHOD.DELETE,
      }),
  });
}
