const URL = 'http://localhost:5059'


function GetPlayers() {
    return fetch(`${URL}/player`, {}).then((response) => { return response.json(); })
}

function GetPlayerById(id) {
    return fetch(`${URL}/player/${id}`, {}).then((response) => { return response.json(); })

}

function UpdatePlayer(playerId, firstName, lastName, bio, rol, functie) {
    const payload = {
        firstName,
        lastName,
        bio,
        rol,
        functie
    }
    const postRequestOptions = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS',
            "mode": "no-cors"
        },
        body: JSON.stringify(payload)
    }
    fetch(`${URL}/player/${playerId}`, postRequestOptions)
        .then((response) => { return response.json(); });
}

export {
    GetPlayers,
    GetPlayerById,
    UpdatePlayer
}