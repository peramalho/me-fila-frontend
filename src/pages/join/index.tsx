import { useState } from "react";
import { Input } from "../../components/Input";
import { Wrapper } from "../../components/Wrapper";
import { ButtonLink } from "../../components/ButtonLink";
import { ROUTES } from "../../constants/routes";
import { Button } from "../../components/Button";
import { ButtonGroup } from "../../components/ButtonGroup";
import { useCreateUserMutation, useJoinRoomMutation } from "../../api/userApi";
import { useAuth } from "../../providers/useAuth";
import { ErrorMessage } from "../../components/ErrorMessage";

export function JoinPage() {
  const [roomId, setRoomId] = useState("");
  const [roomIdError, setRoomIdError] = useState(false);
  const [username, setUsername] = useState("");
  const { loginUser } = useAuth();

  const {
    mutateAsync: createUserMutateAsync,
    isPending: createUserMutateIsPending,
    isError: createUserMutateIsError,
  } = useCreateUserMutation();

  const {
    mutateAsync: joinRoomMutateAsync,
    isPending: joinRoomMutateIsPending,
    isError: joinRoomMutateIsError,
  } = useJoinRoomMutation({
    onSuccess: (data) => {
      loginUser({
        userToken: data.data.id,
        username: data.data.name,
      });
    },
  });

  const handleChangeQueueId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomId(event.target.value);
    setRoomIdError(false);
  };

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (roomId === "") {
      setRoomIdError(true);
      return;
    }

    const user = await createUserMutateAsync({ name: username });
    await joinRoomMutateAsync({ roomId: user.data.user.participatedRoomId });
  };

  return (
    <Wrapper>
      <h1 className="text-5xl">Entrar em Fila</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-16 w-full">
        <div className="w-full flex flex-col gap-4">
          <Input
            id="queue-id"
            label="ID da Fila"
            isError={roomIdError}
            errorMessage="Insira um id por favor"
            value={roomId}
            onChange={handleChangeQueueId}
          />
          <Input
            id="username"
            label="Seu Nome"
            value={username}
            onChange={handleChangeUsername}
          />
        </div>
        <ButtonGroup>
          <Button
            type="submit"
            isLoading={createUserMutateIsPending || joinRoomMutateIsPending}
          >
            Continuar
          </Button>
          <ButtonLink to={ROUTES.HOME}>Voltar</ButtonLink>
          {(createUserMutateIsError || joinRoomMutateIsError) && (
            <ErrorMessage>
              Algo deu errado. Por favor tente novamente
            </ErrorMessage>
          )}
        </ButtonGroup>
      </form>
    </Wrapper>
  );
}
