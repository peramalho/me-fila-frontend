import { Button } from "../../Button";

function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="flex-1 flex flex-col min-w-[440px] py-16 items-center gap-32">
        <h1 className="text-[60px]">Me fila</h1>
        <div className="flex flex-col items-center gap-8 w-full px-12">
          <Button>Criar Fila</Button>
          <Button>Entrar em Fila</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
