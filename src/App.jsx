import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Alunos from "./pages/Alunos";
import Sobre from "./pages/Sobre";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alunos" element={<Alunos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </div>  
  );
}

export default App;