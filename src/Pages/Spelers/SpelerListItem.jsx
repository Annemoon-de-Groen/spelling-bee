import { useContext } from "react"
import { AdminContext } from "../../App"

function SpelerListItem({ speler, setSelectedSpeler }) {
  const { isAdmin } = useContext(AdminContext)
  return (
    <div className="Speler">
      <img className="spelerPicture" src={`https://github.com/Annemoon-de-Groen/the-25th-annual-putnam-county-spelling-bee/blob/main/src/assets/images/${speler.firstName}.JPG?raw=true`} alt={`Image of ${speler.firstName}`} />
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
