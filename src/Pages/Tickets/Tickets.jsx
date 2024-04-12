import { useEffect, useState } from "react"
import { GetPlayById } from "../../BackendConnections/PlayAPI"
import { FormatDate } from "../../Helper/FormatDate"
import { useNavigate } from "react-router-dom"
import '../../stylesheets/Tickets.css'
import { PostTicket } from "../../BackendConnections/TicketAPI"


const dateId = localStorage.getItem('datum')
const initialForm = {
  firstName: '',
  lastName: '',
  email: ''
}


function Tickets() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ ...initialForm })
  const [datum, setDatum] = useState(null)
  useEffect(() => {
    GetPlayById(dateId).then((res) => setDatum(res))
  }, [dateId])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    setFormData({ ...initialForm })
    PostTicket(datum.id, formData.firstName, formData.lastName, formData.email, localStorage.getItem('aantal'), true)
    location.href = 'https://tikkie.me/pay/g03bkn7mvbfmjttl2jub'
  }

  return (
    <div className="Page TicketPage">
      <form className="registerForm">
        <p>Gegevens</p>
        <label>Voornaam: <input
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
          required /></label>
        <br />
        <label>Achternaam: <input
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
          required /></label>
        <br />
        <label>Email: <input
          type="email"
          onChange={handleChange}
          name="email"
          value={formData.email} /></label>
        <br />
        <button onClick={handleSubmit}>Naar betalen</button>

      </form>
      <div className="overview">

        <p>        Aantal: {localStorage.getItem('aantal')}</p>

        {datum && <p>Datum: {FormatDate(datum.date)} </p>}
        <p>Prijs: €{localStorage.getItem('aantal') * 5}</p>
        <button onClick={() => navigate('/date')}>Edit</button>
      </div>
    </div>

  )
}


/*
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data.json'
import RegisterForm from './RegisterForm'
import TicketAmount from './TicketAmount'
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
*/
export default Tickets


