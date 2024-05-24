import { useNavigate } from 'react-router-dom'
import '../stylesheets/Home.css'
import { useEffect, useState } from 'react';
import { GetPlay } from '../BackendConnections/PlayAPI';
import { FormatDate } from '../Helper/FormatDate';

function Home() {
  const navigate = useNavigate()
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    setAllData(GetPlay());
  }, [])
  const handleBuyTicket = (event) => {
    localStorage.removeItem('datum')
    localStorage.removeItem('aantal')
    navigate('/date')
  }

  return (
    <div className='Page homePage'>
      <div className='text'>
        <p>De 25e jaarlijkse Putnam County spelwedstrijd is een musical over een -je raad het al- spelwedstrijd! 6 kinderen gaan de strijd aan voor de spel-beker. Losse verhalen escaleren gedurende de wedstrijd en er blijft altijd de vraag; wie zal er winnen?

Al een aantal maanden zijn we met een groep jongeren bezig om dit stuk op de planken te zetten. (wil je weten wie, neem dan een kijkje bij “Spelers”) en we zouden het super leuk vinden als jij komt kijken! 
Dus koop gauw je kaarten!!</p>
        <a href='https://www.ticketkantoor.nl/shop/spelwedstrijd'><button>Koop kaartjes</button></a>
        <p>Deze musical is volledig gemaakt door jongeren, dit houdt in dat het vertaald, gespeeld en opgevoerd is door ons zelf! We zouden dit stuk heel graag opvoeren, maar daar is alleen wat financiering voor nodig. Er moet namelijk een zaal gehuurd worden, apparatuur gehuurd worden, decor en kostuums moeten gemaakt worden en nog meer. We zouden het daarom heel fijn vinden als jullie iets zouden kunnen bijdragen aan deze voorstelling! </p>
        <a href='https://diensten.asnbank.nl/online/betaalverzoek/#/v2/6f4df135-7a68-4d2b-985f-04da3277e6b7/OQClrtpPPQSTkzp3XaQapi6mdMXSqkrj'><button>Doneer</button></a>

      </div>
      <div>
      <div>
        <img id='frontPageImage' src="https://github.com/Annemoon-de-Groen/the-25th-annual-putnam-county-spelling-bee/blob/main/src/assets/images/Poster.jpeg"></img>
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
            <p>{FormatDate(datum)}</p>
          )
        })}
      </div>
      </div>


    </div>

  )
}

export default Home
