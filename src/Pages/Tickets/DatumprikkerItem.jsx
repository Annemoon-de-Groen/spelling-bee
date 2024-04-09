import { useNavigate } from 'react-router-dom'
import '../../stylesheets/Datumprikker.css'
import { useContext } from 'react'
import { AdminContext } from '../../App'

function DatumPrikkerItem({ datum }) {
  const { isAdmin } = useContext(AdminContext)

  const navigate = useNavigate()
  const handleOnClick = (event) => {
    isAdmin ?
      navigate(`/reserveringen/${datum.id}`) :
      navigate(`/tickets/${datum.id}`)
  }

  const date = new Date(datum.date)
  return (
    <div className="datumPrikkerItem">
      <h1>{date.toLocaleDateString('nl-Nl', { dateStyle: "full" })}</h1>
      <h2>{date.toLocaleTimeString()}</h2>
      <button onClick={handleOnClick}>{isAdmin ? 'Bekijk reserveringen' : 'Koop kaartje'}</button>
    </div>
  )
}

export default DatumPrikkerItem
