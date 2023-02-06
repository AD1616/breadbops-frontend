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

function getCars() {
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

}

getCars();



function addCar() {
  const email = document.getElementById('email-input').value;
  const car = document.getElementById('car-input').value;

  const url = "https://breadbops.gq/api/person/addCar";

  var details = {
      'email': email,
      'carName': car
  };

  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  
  const options = {
    method: 'POST', 
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      // 'Content-Type': 'application/json'
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: formBody
  };

  fetch(url, options)
    .then(response => console.log(response.text()))
    .then(result => getCars())
    .catch(error => console.log('error', error));
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