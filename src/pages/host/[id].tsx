import { Wrapper } from "../../components/Wrapper";
import { Button } from "../../components/Button";
import { useParams } from "react-router";

export function HostIdPage() {
  const { id } = useParams();

  const handleDeleteQueue = () => {};

  return (
    <Wrapper>
      <p>ID da fila: {id}</p>
      <Button onClick={handleDeleteQueue}>Deletar Fila</Button>
    </Wrapper>
  );
}
