import { useNavigate } from 'react-router-dom'
import '../stylesheets/Home.css'
import { useEffect, useState } from 'react';
import { GetPlay } from '../BackendConnections/PlayAPI';
import { FormatDate } from '../Helper/FormatDate';

function Home() {
  const navigate = useNavigate()
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    GetPlay().then((response) => setAllData(response))
  }, [])
  const handleBuyTicket = (event) => {
    localStorage.removeItem('datum')
    localStorage.removeItem('aantal')
    navigate('/date')
  }

  return (
    <div className='Page homePage'>
      <div className='text'>
        <p>De 25 Annual Putnam County Spelling Bee is een musical over een spelwedstrijd waar verschillende kinderen aan meedoen.
          Het is een humoristische voorstelling die nu vertaald is naar het nederlands en deze zomer zal worden opgevoerd in de CultuurCampus.</p>
        <a href='https://www.ticketkantoor.nl/shop/spelwedstrijd'><button>Koop kaartje</button></a>
      </div>
      <div>
        <img id='frontPageImage' src="https://media.blogto.com/events/2015/05/28/764977f9-b816-45aa-905b-e1c0e5a5301b.jpg?w=2048&cmd=resize&quality=70"></img>
      </div>
      <div>
        <p>Cultuurcampus Vleuten
        </p>
        <p>Burchtpoort 5, 3452 MD Utrecht</p>
        <p>Bushalte: Vleuten, Vleuterweide-Centrum</p>
        <div id='mapsBorder'>
          <a id='mapsLocation' href="https://www.google.com/maps/place/CultuurCampus+-+kunstencentrum+en+theater/@52.0935338,5.002394,15z/data=!4m6!3m5!1s0x47c6700dd8d3baf5:0x123be006b344a8c6!8m2!3d52.0938699!4d5.0110025!16s%2Fg%2F11j2yqn33w?entry=ttu" target="_blank">Open in Maps           <img id='mapsLogo' src='https://logodownload.org/wp-content/uploads/2018/01/google-maps-logo-1-1-768x1101.png'></img>
          </a>
        </div>
      </div>
      <div>
        <p> Speelt op</p>
        {allData.map((datum) => {
          return (
            <p>{FormatDate(datum.date)}</p>
          )
        })}
      </div>


    </div>

  )
}

export default Home
