function TicketAmount ({ tickets, setTickets, handleSubmit }) {
  const handleInput = (event) => {
    const tryParse = parseInt(event.target.value)
    setTickets(tryParse)
  }
  return (
        <div className="ChooseTickets">
          <div>
        <button className="changeButton" onClick={() => { if (tickets > 0) setTickets(tickets - 1) }}>-</button>
        <input className="tickets" onChange={handleInput} value={tickets}/>
        <button className="changeButton" onClick={() => { setTickets(tickets + 1) }}>+</button>
        </div>
        <input className="submitButton" type="submit" value="Continue" onClick={handleSubmit} disabled={tickets === 0}/>
        </div>
  )
}

export default TicketAmount
