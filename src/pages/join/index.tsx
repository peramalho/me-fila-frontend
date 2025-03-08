import { useState } from "react";
import { Input } from "../../components/Input";
import { Wrapper } from "../../components/Wrapper";
import { ButtonLink } from "../../components/ButtonLink";
import { ROUTES } from "../../constants/routes";
import { Button } from "../../components/Button";
import { ButtonGroup } from "../../components/ButtonGroup";

export function JoinPage() {
  const [queueId, setQueueId] = useState("");
  const [queueIdError, setQueueIdError] = useState(false);
  const [username, setUsername] = useState("");

  const handleChangeQueueId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueueId(event.target.value);
    setQueueIdError(false);
  };

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (queueId === "") {
      setQueueIdError(true);
      return;
    }

    alert("queueId = " + queueId + "" + " | username = " + username);
  };

  return (
    <Wrapper>
      <h1 className="text-5xl">Entrar em Fila</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-16 w-full">
        <div className="w-full flex flex-col gap-4">
          <Input
            id="queue-id"
            label="ID da Fila"
            isError={queueIdError}
            errorMessage="Insira um id por favor"
            value={queueId}
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
          <Button type="submit">Continuar</Button>
          <ButtonLink to={ROUTES.HOME}>Voltar</ButtonLink>
        </ButtonGroup>
      </form>
    </Wrapper>
  );
}
