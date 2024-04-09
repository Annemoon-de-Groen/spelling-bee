const URL = 'http://localhost:5059'

function GetAllScores() {
    return fetch(`${URL}/score`, {}).then((response) => { return response.json(); })
}

function GetScoreById(id) {
    return fetch(`${URL}/score/${id}`, {}).then((response) => { return response.json(); })
}

function GetTodayScores() {
    return fetch(`${URL}/score/today`, {}).then((response) => { return response.json(); })
}

function GetWeekScores() {
    return fetch(`${URL}/score/week`, {}).then((response) => { return response.json(); })
}

function ClearScores() {
    const requestOptions = {
        method: "DELETE"
    };
    fetch(`${URL}/score/all`, requestOptions)
}

export {
    GetAllScores,
    GetScoreById,
    GetTodayScores,
    GetWeekScores,
    ClearScores
}