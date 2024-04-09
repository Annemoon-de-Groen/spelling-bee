const URL = 'http://localhost:5059'

function GetPlay() {
    return fetch(`${URL}/play`, {}).then((response) => { return response.json(); })
}

function GetPlayById(id) {
    return fetch(`${URL}/play/${id}`, {}).then((response) => { return response.json(); })

}

export {
    GetPlay,
    GetPlayById
}
