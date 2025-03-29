import { useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "../../components/Input";
import { Wrapper } from "../../components/Wrapper";
import { ButtonLink } from "../../components/ButtonLink";
import { ROUTES } from "../../constants/routes";
import { Button } from "../../components/Button";
import { ButtonGroup } from "../../components/ButtonGroup";
import { useCreateRoomMutation } from "../../api/roomApi";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useAuth } from "../../providers/useAuth";

export function HostPage() {
  const [queueName, setQueueName] = useState("");
  const [queueNameError, setQueueNameError] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const { mutate, isPending, isError } = useCreateRoomMutation({
    onSuccess: (data) => {
      login(data.data.hostToken);
      navigate(ROUTES.HOST_ID.replace(":id", data.data.room.id));
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueueName(event.target.value);
    setQueueNameError(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (queueName === "") {
      setQueueNameError(true);
      return;
    }

    mutate({ name: queueName });
  };

  return (
    <Wrapper>
      <h1 className="text-5xl">Criar Fila</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-16 w-full">
        <Input
          id="queue-name"
          label="Nome da Fila"
          isError={queueNameError}
          errorMessage="Insira um nome para a fila por favor"
          value={queueName}
          onChange={handleChange}
        />
        <ButtonGroup>
          <Button type="submit" isLoading={isPending}>
            Continuar
          </Button>
          <ButtonLink to={ROUTES.HOME}>Voltar</ButtonLink>
          {isError && (
            <ErrorMessage>
              Algo deu errado. Por favor tente novamente
            </ErrorMessage>
          )}
        </ButtonGroup>
      </form>
    </Wrapper>
  );
}
