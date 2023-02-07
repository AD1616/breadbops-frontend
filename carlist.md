<h1> View and Update your Car List </h1>

<body>

<div id = "json-data"> </div>

<label for="email-input">Enter Your Email to see your car list</label>
<input name="email-input" type="text" id="email-input">

<br>

<label for="car-input">Enter a car name to add it to your list</label>
<input name="car-input" onkeyup="search_car()" type="text" id="car-input">

<br>
<br>
<button class="button1" onclick="addCar()" id="submit-button">Submit</button>

<ol id='list'>

</ol>

</body>

<script>

// Called to update the CAR LIST

function getCars() {
  const email = document.getElementById('email-input').value;
  
  const options = {
      method: 'GET', 
      mode: 'cors', 
      cache: 'default', 
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json'
          
      },
  };

  // Generates car list for particular email

  fetch('https://breadbops.gq/api/person/getPersonCarList?email=' + email, options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let items = '';
      for (const item of data) {
          items += `<li>${item.name}</li>`;
      }
      document.getElementById('json-data').innerHTML = `<ul>${items}</ul>`;
    })
    .catch(error => console.error(error));

}

var myHeaders = new Headers();
myHeaders.append("Cookie", "JSESSIONID=50444A2204FEABB3D34244D4E48F50B7");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

// Generates options to add to car list

fetch("https://breadbops.gq/api/carInventory/all", requestOptions)
  .then(response => response.text())
  .then(result => {
    const data = JSON.parse(result);
    let carsDisplay = document.getElementById("list");

    for (i=0; i < data.length; i++) {
      (function(i) {
        var but = document.createElement('button');
        but.innerHTML = data[i]["name"];
        but.setAttribute('class', 'cars');

        but.addEventListener("click", function() {
          addCarFromList(but.innerHTML);
        });
        carsDisplay.appendChild(but);
      })(i);
    }
  })
  .catch(error => console.log('error', error));


// Functionality to add car from options

function addCarFromList(carToAdd) {
  console.log(carToAdd);
  document.getElementById('car-input').value = carToAdd;
  addCar();
}

// Updates the Carlist

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

// Updates the options based on input

function search_car() {
    let input = document.getElementById('car-input').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('cars');
    
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";    
        }
    }
}

</script>

<style>

  #input {
      text-shadow: 0 1px 1px hsl(0 0% 0% / 20%);
  }


  a:focus,
  a:hover {
    text-decoration-color: black;
  }

  input {
    font-size: 1em;
    padding: 0.2em 0.5em;
  }   

  label {
      font-size: 1em;
  }

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
    font-size: 2em;
  }

  .button1:hover {
    transition-duration: 1s;
    background-color: #ad1616;
    color: white;
  }
</style>