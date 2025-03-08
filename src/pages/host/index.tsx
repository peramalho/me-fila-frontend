import { useState } from "react";
import { Input } from "../../components/Input";
import { Wrapper } from "../../components/Wrapper";
import { ButtonLink } from "../../components/ButtonLink";
import { ROUTES } from "../../constants/routes";
import { Button } from "../../components/Button";
import { ButtonGroup } from "../../components/ButtonGroup";

export function HostPage() {
  const [queueName, setQueueName] = useState("");
  const [queueNameError, setQueueNameError] = useState(false);

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

    alert("queueName = " + queueName);
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
          <Button type="submit">Continuar</Button>
          <ButtonLink to={ROUTES.HOME}>Voltar</ButtonLink>
        </ButtonGroup>
      </form>
    </Wrapper>
  );
}
