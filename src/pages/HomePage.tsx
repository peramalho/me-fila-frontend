import { ButtonLink } from "../components/ButtonLink";
import { Wrapper } from "../components/Wrapper";
import { ROUTES } from "../constants/routes";

export function HomePage() {
  return (
    <Wrapper>
      <h1 className="text-[60px]">Me fila</h1>
      <div className="flex flex-col gap-8 w-full">
        <ButtonLink to={ROUTES.CREATE}>Criar Fila</ButtonLink>
        <ButtonLink to={ROUTES.JOIN}>Entrar em Fila</ButtonLink>
      </div>
    </Wrapper>
  );
}
