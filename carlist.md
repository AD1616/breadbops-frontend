<h1> View and Update your Car List </h1>

<body>

<div id = "json-data"> </div>

<label for="email-input">Email: </label>
<input name="email-input" type="text" id="email-input">
<label for="car-input">Car Name: </label>
<input name="car-input" type="text" id="car-input">
<button class="button1" onclick="addCar()" id="submit-button">Submit</button>

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
    const post_options = {
      ...options, 
      method: 'POST', 
      body: JSON.stringify({ email: email, car: car })
    }; 
    fetch('https://breadbops.gq/api/person/addCar', post_options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  });
}

</script>

<style>
  .button {
    background-color: #ad1616;
    color: white;
    text-align: center;
    transition-duration: 1s;
    cursor: pointer;
  }

  .button1 {
    background: transparent;
    border: none;
    border-radius: 12px;
    color: #ad1616; 
    font-size: 1em;
  }

  .button1:hover {
    transition-duration: 1s;
    background-color: #ad1616;
    color: white;
  }
</style>