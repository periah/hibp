
document.querySelector('button').addEventListener('click', getPwned)
function getPwned(){
//    headers: {'hibp-api-key': '97c4020a628f4b07b57dd60b194e77a3'}
//});

  const email = document.querySelector('input').value
  const url = "https://cors-anywhere.herokuapp.com/https://haveibeenpwned.com/api/v3/breachedaccount/" +encodeURIComponent(email)
  fetch(url, {
    method: "GET",
    withCredentials: true,
    headers: {
      'hibp-api-key': '97c4020a628f4b07b57dd60b194e77a3',
      'user-agent': 'Peri Ahmadi'
}
})
    .then (res => res.json())
    .then (data => {
      document.querySelector('p').innerText = data[].Name
      console.log(data);
    })
    .catch(err => {
    console.log(`error ${err}`);
})
}
