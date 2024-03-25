import { useNavigate } from 'react-router-dom'
import './stylesheets/Top.css'

function Top() {

  return (
    <>
      <h1 className="title">The 25th Annual Putnam County Spelling Bee</h1>
      <nav className='navigationBar'>
        <a href="/">Home</a>
        <a href="#/info">Info</a>
        <a href="#/spelers">Spelers</a>
        <a href="#/spellen">Spellen</a>
      </nav>
    </>
  )
}

export default Top
