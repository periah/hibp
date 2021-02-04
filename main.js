
document.querySelector('button').addEventListener('click', getPwned)
function getPwned(){
//    headers: {'hibp-api-key': '97c4020a628f4b07b57dd60b194e77a3'}
//});
 'origin: http://localhost:8888'

  const email = document.querySelector('input').value
  const url = "https://haveibeenpwned.com/api/v3/breachedaccount/" +encodeURIComponent(email)
  fetch(url, {
    method: "GET",
    withCredentials: true,
    headers: {
      'hibp-api-key': '97c4020a628f4b07b57dd60b194e77a3'
}
})
    .then (res => res.json())
    .then (data => {
      document.querySelector('h2').innerText = data.title
    })
    .catch(err => {
    console.log('error ${err}');
})
}
