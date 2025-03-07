import { useState } from "react";
import { Input } from "../components/Input";
import { Wrapper } from "../components/Wrapper";
import { ButtonLink } from "../components/ButtonLink";
import { ROUTES } from "../constants/routes";
import { Button } from "../components/Button";

export function CreatePage() {
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-16">
        <Input
          id="queue-name"
          label="Nome da Fila"
          isError={queueNameError}
          errorMessage="Insira um nome para a fila por favor"
          value={queueName}
          onChange={handleChange}
        />
        <div className="flex flex-col gap-8">
          <Button type="submit">Continuar</Button>
          <ButtonLink to={ROUTES.HOME}>Voltar</ButtonLink>
        </div>
      </form>
    </Wrapper>
  );
}
