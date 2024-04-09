import { useContext } from "react"
import { AdminContext } from "../../App"

function SpelerListItem({ speler, setSelectedSpeler }) {
  const { isAdmin } = useContext(AdminContext)
  return (
    <div className="Speler">
      <img className="spelerPicture" src={speler.picture} alt={`Image of ${speler.firstName}`} />
      <div>
        <h1 className="spelerName">{speler.firstName} {speler.lastName}</h1>
        {speler.rol && <h2>als: {speler.rol}</h2>}
        <button onClick={() => setSelectedSpeler(speler)}>Over {speler.firstName}</button>
        {isAdmin && <button>Edit</button>}
      </div>


    </div>
  )
}

export default SpelerListItem
