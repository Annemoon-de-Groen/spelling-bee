const URL = 'http://localhost:4000'
function PostAPI (data) {
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

function Update (datum, data) {
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

function Get () {
  console.log('Getting data')
}

export { Update }
