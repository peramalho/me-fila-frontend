import { getEnv } from "../env";

const BACKEND_URL = getEnv("VITE_BACKEND_URL");

export enum API_METHOD {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export const API_ROUTES = {
  ROOM: BACKEND_URL + "/room",
  ROOM_ID: BACKEND_URL + "/room/:id",
};
