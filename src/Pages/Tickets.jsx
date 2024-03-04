import { useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data.json'
import RegisterForm from './RegisterForm'
import TicketAmount from './TicketAmount'
import '../stylesheets/Tickets.css'

function Tickets () {
  const { date } = useParams()
  const [tickets, setTickets] = useState(0)
  const [askName, setAskName] = useState(false)

  const handleTicketSubmit = (event) => {
    event.preventDefault()
    setAskName(true)
    console.log('Aantal tickets:', tickets)
  }

  return (
        <div className="Page">
            <div>
                <h1 className='date'>{data[date].date}</h1>
                <h2 className='date'>{data[date].time}</h2>
            </div>
            {!askName && <TicketAmount tickets={tickets} setTickets={setTickets} handleSubmit={handleTicketSubmit}/>}

            {askName && <div> <h1 className='date'>Aantal tickets: {tickets}</h1> 
                              <RegisterForm date={date} tickets={tickets}/> </div>}

        </div>
  )
}

export default Tickets
