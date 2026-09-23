import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav class="navbar">
      <Link class="nav-btn" to="/">Home</Link>
      <Link class="nav-btn" to="/alunos">Alunos</Link>
      <Link class="nav-btn" to="/sobre">Sobre</Link>
    </nav>
  );
}

export default Menu;