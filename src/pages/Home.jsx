import LikeButton from "../components/LikeButton";
import Tecla from "../components/Tecla";
import { useState, useEffect } from "react";

function Home() {
  const [numero, setNumero] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.title = `Você clicou ${numero} vezes`;
  }, [numero]);

  return (
    <div>
      <h1>Página Inicial</h1>
      <p>Bem-vindo ao exemplo de rotas em React.</p>
      <hr />
      <h2>Exercício Contador e Título</h2>
      <button onClick={() => setNumero(item => item + 1)}>Aumentar</button>
      <p>Número {numero}</p>
      <hr />
      <h2>Exercício Botão de Curtir</h2>
      <LikeButton />
      <hr />
      <h2>Exercício Tecla (Cleanup)</h2>
      <button onClick={() => setShow(!show)}>Mostrar / Esconder Tecla</button>
      {show && <Tecla />}
    </div>
  );
}

export default Home;