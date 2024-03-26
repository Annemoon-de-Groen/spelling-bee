import data from '../../data.json'
import DatumPrikkerItem from './DatumprikkerItem'

function Datumprikker() {
  const allData = () => {
    const result = []
    for (const key in data) {
      result.push(key)
    }
    return result
  }

  return (
    <div className="Page">
      {allData().map((d) => { return (<DatumPrikkerItem datum={data[d]} datumKey={d} />) })}
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
