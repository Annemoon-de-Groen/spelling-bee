import SpelerListItem from './SpelerListItem'
import '../../stylesheets/Spelers.css'
import { useEffect, useState } from 'react'
import { GetPlayers } from '../../BackendConnections/PlayerAPI'

function Spelers() {
  const [selectedSpeler, setSelectedSpeler] = useState(null)
  const [players, setPlayers] = useState([])
  useEffect(() => {
    //GetPlayers().then((response) => setPlayers(response))
    setPlayers(GetPlayers())
  }, [])
  return (
    <>
      {selectedSpeler &&
        <div className='spelerPopup'>
          <h3 className='popupTitle'>{selectedSpeler.firstName} {selectedSpeler.lastName}</h3>
          <p>{selectedSpeler.bio}</p>
          <button onClick={() => setSelectedSpeler(null)}>OK</button>
        </div>}
      <div className="spelersPage Page">
        {
          players.map((c, index) => {
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
