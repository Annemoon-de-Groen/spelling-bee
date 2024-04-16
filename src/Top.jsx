import { useNavigate } from 'react-router-dom'
import './stylesheets/Top.css'
import { useContext } from 'react'
import { AdminContext } from './App'

function Top() {

  const navigate = useNavigate()
  const { isAdmin, setIsAdmin } = useContext(AdminContext)

  return (
    <>
      <h1 className="title">De 25ste Jaarlijkse Putnam County Spelwedstrijd</h1>
      <nav className='navigationBar'>
        <a onClick={() => navigate('/')}>Home</a>
        <a onClick={() => navigate('/info')} >Info</a>
        <a onClick={() => navigate('/spelers')}>Spelers</a>
        <a onClick={() => navigate('/spellen')}>Spellen</a>
      </nav>
      <button onClick={() => setIsAdmin(!isAdmin)}>{isAdmin ? "Admin" : "User"}</button>
    </>
  )
}

export default Top
