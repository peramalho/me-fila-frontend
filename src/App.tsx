import { Button } from "./Button";

function App() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="flex-1 flex flex-col w-[440px] py-16 items-center gap-8">
        <p className="text-xl">Me fila</p>
        <Button>Criar Fila</Button>
        <Button>Entrar em Fila</Button>
      </div>
    </div>
  );
}

export default App;
