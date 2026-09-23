import { useEffect, useState } from "react"
import SearchBar from "./SearchBar"
 
function UserList() {
  const [usuarios, setUsuarios] = useState([])
  const [busca, setBusca] = useState("")
  const [loading, setLoading] = useState(true)
  const [recarregar, setRecarregar] = useState(0)
 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(dados => {
        setUsuarios(dados)
        setLoading(false)
      })
  }, [recarregar])
 
  const filtrados = usuarios.filter(user =>
    user.name.toLowerCase().includes(busca.toLowerCase())
  )
 
  if (loading) return <p>Carregando...</p>
 
    return (
        <div>
            <button onClick={() => setRecarregar(prev => prev + 1)}>
                Recarregar usuários
            </button>
 
            <SearchBar busca={busca} setBusca={setBusca} />
 
            {filtrados.length === 0 ? (
            <p>Nenhum usuário encontrado</p>
            ) : (
            <ul>
                {filtrados.map(user => (
                <li key={user.id}>
                    {user.name} - {user.email} - {user.phone}
                </li>
                ))}
            </ul>
            )}
        </div>
    )
}
 
export default UserList