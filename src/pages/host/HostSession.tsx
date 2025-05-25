import { Navigate } from "react-router";
import { Wrapper } from "../../components/Wrapper";
import { Button } from "../../components/Button";
import { useDeleteRoomMutation } from "../../api/roomApi";
import { ROUTES } from "../../constants/routes";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useAuth } from "../../providers/useAuth";

export function HostSession() {
  const { hostToken, roomId, logout } = useAuth();

  const { mutate, isPending, isError } = useDeleteRoomMutation({
    onSuccess: () => {
      logout();
    },
    onError: (error) => {
      if (error.error.error.code === 404) {
        logout();
      }
    },
  });

  if (!hostToken || !roomId) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  const handleDeleteQueue = () => {
    mutate({ hostToken });
  };

  return (
    <Wrapper>
      Id da fila: {roomId}
      <Button onClick={handleDeleteQueue} isLoading={isPending}>
        Deletar Fila
      </Button>
      {isError && (
        <ErrorMessage>Algo deu errado. Por favor tente novamente</ErrorMessage>
      )}
    </Wrapper>
  );
}
