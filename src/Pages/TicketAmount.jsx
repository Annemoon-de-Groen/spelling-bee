function TicketAmount({tickets, setTickets, handleSubmit}){

    const handleInput = (event) =>{
        const tryParse = parseInt(event.target.value) 
        setTickets(tryParse)
    }
    return (
        <div>
        <button onClick={() => {if (tickets > 0) setTickets(tickets-1)}}>-</button>
        <input onChange={handleInput} value={tickets}/>
        <button onClick={() => {setTickets(tickets+1)}}>+</button>
        <input type="submit" value="Continue" onClick={handleSubmit} disabled={tickets===0}/>
        
        </div>
    )
}

export default TicketAmount