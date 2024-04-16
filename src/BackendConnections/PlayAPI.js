const URL = 'https://localhost:32788'

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
