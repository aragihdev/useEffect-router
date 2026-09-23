import { useEffect } from "react";

function Tecla() {
  useEffect(() => {
    console.log("Componente TECLA useEffect");

    function handleKeyUp() {
      console.log("Apertou Alguma tecla");
    }

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      console.log("CLEANUP CHAMADO");
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <h4>Componente Tecla</h4>
  );
}

export default Tecla;