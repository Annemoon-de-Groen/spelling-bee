const URL = 'https://localhost:32788'

function PostTicket(playId, firstName, lastName, email, amount, paid) {

    const bodyPayload = {
        firstName,
        lastName,
        email,
        amount,
        paid
    }
    console.log("POST TICKET", bodyPayload)
    const PostOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS',
            "mode": "no-cors"
        },
        body: JSON.stringify(bodyPayload)
    }
    fetch(`${URL}/ticket/${playId}`, PostOptions);
}

function PayTicket(id) {
    const postRequestOptions = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS,PUT',
            "mode": "no-cors"
        }
    }
    fetch(`${URL}/ticket/pay/${id}`, postRequestOptions)
        .then((response) => { return response.json(); });
}

function GetTickets() {
    return fetch(`${URL}/ticket`, {}).then((response) => { return response.json(); })
}

function GetTicketsByPlay(id) {
    return fetch(`${URL}/ticket/${id}`, {}).then((response) => { return response.json(); })
}

function DeleteTicket(id) {
    const requestOptions = {
        method: "DELETE"
    };
    fetch(`${URL}/ticket/${id}`, requestOptions)
}

export {
    PostTicket,
    GetTickets,
    GetTicketsByPlay,
    PayTicket,
    DeleteTicket
}