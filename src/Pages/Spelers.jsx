import crew from '../Crew.json'
import SpelerListItem from './SpelerListItem'
import '../stylesheets/Spelers.css'
import { useState } from 'react'

function Spelers() {
  const [selectedSpeler, setSelectedSpeler] = useState(null)
  console.log(crew.crew)
  return (
    <>
      {selectedSpeler &&
        <div className='spelerPopup'>
          <h1>INFORMATIE OVER {selectedSpeler.firstName}</h1>
          <button onClick={() => setSelectedSpeler(null)}>OK</button>
        </div>}

      <div className="spelersPage Page">
        {
          crew.crew.map((c, index) => {
            return (
              <SpelerListItem speler={c} setSelectedSpeler={setSelectedSpeler} />
            )
          })
        }

      </div>
    </>

  )
}

export default Spelers
