import '../stylesheets/SpelerListItem.css'

function SpelerListItem({speler}){
    return(
        <div className="Speler">
            <h1>{speler.firstName} {speler.lastName}</h1>
            <ul>
            {
                speler.rol.map((rol, index) => {return(
                    <li key={index}>{rol}</li>
                )})
            }
            </ul>
            <img className="spelerPicture" src={speler.picture} alt={`Image of ${speler.firstName}`}/>
            <h2>{speler.text}</h2>
            {speler.speelt && <h2>Speelt: {speler.speelt}</h2>}
        </div>
    )
}

export default SpelerListItem