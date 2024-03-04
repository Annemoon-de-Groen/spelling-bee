import { useNavigate } from 'react-router-dom'
import '../stylesheets/Home.css'

function Home () {
  const navigate = useNavigate()

  const handleBuyTicket = (event) => {
    navigate('/date')
  }

  return (
        <div className='Page homePage'>
            <h1>Data worden nog aangekondigd!</h1>
            <button onClick={handleBuyTicket}>Koop kaartje</button>
        </div>

  )
}

export default Home
