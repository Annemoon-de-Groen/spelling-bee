import { useNavigate } from 'react-router-dom'
import '../stylesheets/Datumprikker.css'

function DatumPrikkerItem({datum, datumKey}){
    const navigate = useNavigate()
    const handleOnClick = (event) =>{
        navigate(`/tickets/${datumKey}`)
    }
    return(
        <div className="datumPrikkerItem">
            <h1>{datum.date}</h1>
            <h2>{datum.time}</h2>
            <button onClick={handleOnClick}>Koop kaartje</button>
        </div>
    )
}

export default DatumPrikkerItem