import { useEffect, useState } from 'react'
import data from '../../data.json'
import DatumPrikkerItem from './DatumprikkerItem'
import { GetPlay } from '../../BackendConnections/PlayAPI';

function Datumprikker() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    GetPlay().then((response) => setAllData(response))
  }, [])

  const alData = () => {
    const result = []
    for (const key in data) {
      result.push(key)
    }
    return result
  }

  return (
    <div className="Page">
      {allData.map((d) => { return (<DatumPrikkerItem datum={d} />) })}
    </div>
  )
}

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
