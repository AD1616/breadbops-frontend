<h1> View and Update your Car List </h1>

<br>

<body>

<h1 id = "loggedIn"> </h1>

<div id = "json-data"> </div>

<!-- <label for="email-input">Enter Your Email to see your car list</label>
<input name="email-input" type="text" id="email-input"> -->
<!-- <button class="button1" onclick="addCar()" id="submit-button">Submit</button> -->

<br>

<label id="car-input-label" for="car-input">Enter a car name, and select it from our inventory to add it</label>
<input name="car-input" onkeyup="search_car()" type="text" id="car-input">



<ol class="center" id='list'>

</ol>

</body>

<script>

document.getElementById("car-input").style.visibility = "hidden";
document.getElementById("car-input-label").style.visibility = "hidden";
document.getElementById("list").style.visibility = "hidden";

const email = sessionStorage.getItem("email");
if (email == null || email == "") {
  document.getElementById("loggedIn").innerHTML = "Sign in to save a wish list."
}

else {
  getCars();
}

// Called to update the CAR LIST

function getCars() {
  // const email = document.getElementById('email-input').value;


  const options = {
      method: 'GET', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'include', 
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
  
  document.getElementById("car-input-label").style.visibility = "visible";
  document.getElementById("car-input").style.visibility = "visible";
  document.getElementById("list").style.visibility = "visible";

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
        but.classList.add('cars');
        but.classList.add('button-17');
        // but.setAttribute('class', 'cars');
        // but.setAttribute('class', 'button-17');

        but.addEventListener("click", function() {
          addCarFromList(but.innerHTML);
        });
        
        but.style.display="list-item"; 
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
  // const email = document.getElementById('email-input').value;
  // const email = sessionStorage.getItem("email");
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
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
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

  .center
  {
    text-align: center;
    list-style-position: inside;
  }
  ol.center button
  {
    margin-top: 3%;
    margin-left: 45%;
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
    font-size: 1em;
  }

  .button1:hover {
    transition-duration: 1s;
    background-color: #ad1616;
    color: white;
  }


/* CSS */
.button-17 {
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform,opacity;
  z-index: 0;
}

.button-17:hover {
  background: #F6F9FE;
  color: #174ea6;
}

.button-17:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button-17:focus {
  outline: none;
  border: 2px solid #4285f4;
}

.button-17:not(:disabled) {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button-17:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
}

.button-17:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button-17:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
}

.button-17:disabled {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}
</style>