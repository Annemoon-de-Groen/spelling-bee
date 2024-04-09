import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data.json'
import RegisterForm from './RegisterForm'
import TicketAmount from './TicketAmount'
import '../../stylesheets/Tickets.css'
import { GetPlayById } from '../../BackendConnections/PlayAPI'

function Tickets() {
  const { dateId } = useParams()
  const [datum, setDatum] = useState(null)
  useEffect(() => {
    GetPlayById(dateId).then((res) => setDatum(res))
  }, [dateId])
  const [tickets, setTickets] = useState(0)
  const [askName, setAskName] = useState(false)

  const handleTicketSubmit = (event) => {
    event.preventDefault()
    setAskName(true)
    console.log('Aantal tickets:', tickets)
  }

  let date;
  if (datum) {
    date = new Date(datum.date)

  }


  return (
    <div className="Page">
      {datum &&
        <div>
          <h1 className='date'>{date.toDateString()}</h1>
          <h2 className='date'>{date.toLocaleTimeString()}</h2>
        </div>
      }
      {!askName && <TicketAmount tickets={tickets} setTickets={setTickets} handleSubmit={handleTicketSubmit} />}

      {askName && <div> <h1 className='date'>Aantal tickets: {tickets}</h1>
        <RegisterForm date={datum} tickets={tickets} /> </div>}

    </div>
  )
}

export default Tickets
