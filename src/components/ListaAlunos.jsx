import { useState } from "react";

function ListaAlunos() {
  const [aluno, setAluno] = useState("");
  const [listaAlunos, setListaAlunos] = useState([]);

  function adicionarAluno() {
    if (aluno.trim() === "") return;
    setListaAlunos([...listaAlunos, aluno]);
    setAluno(""); 
  }

  return (
    <div>
      <h2>Alunos</h2>
      <input
        type="text"
        value={aluno}
        onChange={(e) => setAluno(e.target.value)}
      />
      <button onClick={adicionarAluno}>Adicionar</button>
      
      {listaAlunos.length === 0 ? (
        <p>Nenhum aluno cadastrado</p>
      ) : (
        <ul>
          {listaAlunos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaAlunos;