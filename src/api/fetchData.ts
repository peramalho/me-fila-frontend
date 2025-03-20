type ApiMethod = "GET" | "POST" | "DELETE" | "PATCH";

export async function fetchData({
  url,
  method,
  body,
  hostToken,
}: {
  url: string;
  method: ApiMethod;
  body?: Record<string, unknown>;
  hostToken?: string;
}) {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(hostToken ? { Authorization: `Bearer ${hostToken}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) {
    const errorResponse = await response.json();
    throw {
      error: errorResponse,
    };
  }
  return response.json();
}
