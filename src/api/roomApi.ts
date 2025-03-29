import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { API_METHOD, API_ROUTES } from "../constants/apiRoutes";
import { fetchData } from "./fetchData";
import { Room, SuccessResponse, ErrorResponse } from "../types";

type useCreateRoomMutationSuccessResponse = SuccessResponse<{
  room: Room;
  hostToken: string;
}>;
type useCreateRoomMutationVariables = { name: string };
export function useCreateRoomMutation(
  options?: UseMutationOptions<
    useCreateRoomMutationSuccessResponse,
    ErrorResponse,
    useCreateRoomMutationVariables
  >
) {
  return useMutation<
    useCreateRoomMutationSuccessResponse,
    ErrorResponse,
    useCreateRoomMutationVariables
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

type useDeleteRoomMutationSuccessResponse = SuccessResponse<null>;
type useDeleteRoomMutationVariables = { hostToken: string };
export function useDeleteRoomMutation(
  options?: UseMutationOptions<
    useDeleteRoomMutationSuccessResponse,
    ErrorResponse,
    useDeleteRoomMutationVariables
  >
) {
  return useMutation<
    useDeleteRoomMutationSuccessResponse,
    ErrorResponse,
    useDeleteRoomMutationVariables
  >({
    ...options,
    mutationFn: ({ hostToken }) =>
      fetchData({
        url: API_ROUTES.ROOM,
        method: API_METHOD.DELETE,
        hostToken,
      }),
  });
}
