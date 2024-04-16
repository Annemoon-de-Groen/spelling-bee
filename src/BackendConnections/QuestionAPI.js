const URL = 'https://localhost:32788'
/*
function PostAPI(data) {
  console.log('Posting data...')
  const PostOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  }
  fetch(URL, PostOptions).then((response) => { return response.json() }).then((jsonData) => {
    console.log(jsonData)
  })
}
*/



function GetQuestion() {
  return fetch(`${URL}/question`, {}).then((response) => { return response.json(); })
}

function GetQuestionById(id) {
  return fetch(`${URL}/question/${id}`, {}).then((response) => { return response.json(); })
}
function PostQuestion(word, definition, sentence) {
  const bodyPayload = {
    word,
    definition,
    sentence
  }
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
  fetch(`${URL}/question`, PostOptions);
}

function UpdateQuestion(questionId, word, definition, sentence) {
  const payload = {
    word,
    definition,
    sentence
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
  fetch(`${URL}/question/${questionId}`, postRequestOptions)
    .then((response) => { return response.json(); });
}

function DeleteQuestion(id) {
  const requestOptions = {
    method: "DELETE"
  };
  fetch(`${URL}/question/${id}`, requestOptions)
}

//TODO: Move to ticketAPI and make it connect with backend
function Update(datum, data) {
  console.log('Update', datum, 'with data', data)
  const postRequestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(`${URL}/${datum}`, postRequestOptions).then((response) => {
    return response.json()
  })
}


export {
  GetQuestion,
  GetQuestionById,
  PostQuestion,
  UpdateQuestion,
  DeleteQuestion,
  Update
}
