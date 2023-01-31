<h1> View and Update your Car List </h1>

<body>

<div id = "json-data"> </div>

<input type="text" id="email-input">
<input type="text" id="car-input">
<button onclick="addCar()" id="submit-button">Submit</button>

</body>

<script>

const options = {
    method: 'GET', 
    mode: 'cors', 
    cache: 'default', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json'
        
    },
};
const post_options = {
    ...options, 
    method: 'POST', 
    body: JSON.stringify({ email: email, car: car })
}; 

fetch('https://breadbops.gq/api/person/all', options)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let items = '';
    for (const item of data[0]["carList"]) {
        items += `<li>${item.name}</li>`;
    }
    document.getElementById('json-data').innerHTML = `<ul>${items}</ul>`;
  })
  .catch(error => console.error(error));

function addCar() {
  document.getElementById('submit-button').addEventListener('click', function() {
    const email = document.getElementById('email-input').value;
    const car = document.getElementById('car-input').value;
    fetch('https://breadbops.gq/api/person/addCar', post_options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  });
}

</script>