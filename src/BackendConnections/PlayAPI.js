const URL = 'https://localhost:32788'

function GetPlay() {
    return [
        new Date('06-15-2024 19:00'),
        new Date('06-16-2024 19:00')
    ]
}

function GetPlayById(id) {
    return fetch(`${URL}/play/${id}`, {}).then((response) => { return response.json(); })

}

export {
    GetPlay,
    GetPlayById
}
