
function SpelerListItem({ speler, setSelectedSpeler }) {
  return (
    <div className="Speler">
      <img className="spelerPicture" src={speler.picture} alt={`Image of ${speler.firstName}`} />
      <div>
        <h1 className="spelerName">{speler.firstName} {speler.lastName}</h1>
        {speler.speelt && <h2>als: {speler.speelt}</h2>}
        <button onClick={() => setSelectedSpeler(speler)}>Over {speler.firstName}</button>
      </div>


    </div>
  )
}

export default SpelerListItem
