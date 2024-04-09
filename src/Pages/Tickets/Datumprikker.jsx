import { useEffect, useState } from 'react'
import { GetPlay } from '../../BackendConnections/PlayAPI';
import { useNavigate } from 'react-router-dom';

const aantallen = [1, 2, 3, 4, 5, 6, 7, 8]
const initialForm = {
  datum: 0,
  aantal: 0
}

function Datumprikker() {
  const navigate = useNavigate()
  const [allData, setAllData] = useState([]);

  const [formData, setFormData] = useState({ ...initialForm })

  useEffect(() => {
    GetPlay().then((response) => setAllData(response))
  }, [])

  const handleChange = (event) => {
    formData[event.target.name] = event.target.value;
    setFormData({ ...formData })
  }

  const handleSubmit = (event) => {
    console.log(formData)
    localStorage.setItem('datum', formData.datum)
    localStorage.setItem('aantal', formData.aantal)
    navigate('/tickets')
  }
  return (
    <div className="Page">
      <p>Koop kaartje</p>
      <div>

        <select name='datum' onChange={handleChange}>
          <option value='0'>Selecteer een voorstelling</option>
          {allData.map((datum) => {
            const date = new Date(datum.date)
            return (
              <option value={datum.id}>{date.toLocaleDateString('nl-Nl', { dateStyle: "full" })} om {date.toTimeString().slice(0, 5)}</option>
            )

          })}
        </select>
      </div>
      <div>
        Aantal:
        <select name='aantal' onChange={handleChange}>
          {aantallen.map((getal) => {
            return (
              <option>{getal}</option>
            )
          })}

        </select>
      </div>
      <button onClick={handleSubmit}>Continue</button>


    </div>
  )
}

//      {allData.map((d) => { return (<DatumPrikkerItem datum={d} />) })}


export default Datumprikker

/*
        <form className="Page">
            <select id="datum" name="datum">
                <option value="datum 1"> Datum 1 </option>
                <option value="datum 2"> Datum 2 </option>
                <option value="datum 3"> Datum 3 </option>
                <option value="datum 4"> Datum 4 </option>
            </select>

        </form>
    */
