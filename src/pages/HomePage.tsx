import { ButtonGroup } from "../components/ButtonGroup";
import { ButtonLink } from "../components/ButtonLink";
import { Wrapper } from "../components/Wrapper";
import { ROUTES } from "../constants/routes";

export function HomePage() {
  return (
    <Wrapper>
      <h1 className="text-6xl">Me Fila</h1>
      <ButtonGroup>
        <ButtonLink to={ROUTES.JOIN}>Entrar em Fila</ButtonLink>
        <ButtonLink to={ROUTES.HOST}>Criar Fila</ButtonLink>
      </ButtonGroup>
    </Wrapper>
  );
}
