import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { DeleteTicket, GetTicketsByPlay, PayTicket } from "../BackendConnections/TicketAPI"

function Reserveringen() {
    const { id } = useParams()
    const [tickets, setTickets] = useState([])
    useEffect(() => {
        GetTicketsByPlay(id).then(res => setTickets(res))
    }, [id])

    const pay = (ticket) => {
        PayTicket(ticket.id)
        ticket.paid = true
        setTickets([...tickets])
    }

    const deleteTicket = (ticket) => {
        tickets.splice(tickets.indexOf(ticket), 1)
        setTickets([...tickets])
        DeleteTicket(ticket.id)
    }
    return (
        <div className="Page">
            <table>
                <tr>
                    <th>Voornaam</th>
                    <th>Achternaam</th>
                    <th>Email</th>
                    <th>Aantal</th>
                    <th>Betaald</th>
                    <th>Gekocht op</th>
                </tr>
                {tickets.map((ticket) => {
                    const date = new Date(ticket.createdAt)
                    return (
                        <tr>
                            <td>{ticket.firstName}</td>
                            <td>{ticket.lastName}</td>
                            <td>{ticket.email}</td>
                            <td>{ticket.amount}</td>
                            <td>{ticket.paid ? 'Ja' : 'Nee'}</td>
                            <td>{date.toLocaleDateString()}</td>
                            <button onClick={() => pay(ticket)}>Betaald</button>
                            <button onClick={() => deleteTicket(ticket)}>Verwijder</button>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Reserveringen