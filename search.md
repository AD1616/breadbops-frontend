
<body>
  <div id="cover">
    <form method="get">
      <div class="table">
        <div class="td">
          <input id="searchbar" onkeyup="search_car()" type="text" placeholder="Search" required>
        </div>
        <div class="td" id="s-cover">
          <button onclick="search_car()" type="submit">
            <div id="s-circle"></div>
            <span></span>
          </button>
        </div>
      </div>
    </form>
  </div>

  <ol id='list'>

  </ol>
</body>

<link rel="stylesheet" href="css/style.css">

<script>

let text = '{ "cars" : [' + 
  '{ "name":"Honda Odyssey" },' + 
  '{ "name":"Tesla Model 3" },' +
  '{ "name":"Toyota Prius" },' +
  '{ "name":"Honda Civic" } ]}'

const data = JSON.parse(text);

let carsDisplay = document.getElementById("list");

for (i=0; i < data["cars"].length; i++) {
  console.log(data["cars"][i]["name"]);

  var li = document.createElement('li');
  li.setAttribute('class', 'cars');
  li.innerHTML = data["cars"][i]["name"];

  carsDisplay.appendChild(li);
}

function search_car() {
    let input = document.getElementById('searchbar').value
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
* {
  outline: none;
}

#list{
  font-size:  1em;
  position: relative;
  top: 100px;
  color: #ad1616;
}

.cars{
   display: list-item;    
} 

html,
body {
  height: 100%;
  min-height: 100%;
}

body {
  margin: 0;
  background-color: #ad1616;
}

.table {
  display: table;
  width: 100%;
}

.td {
  display: table-cell;
  vertical-align: middle;
}

input,
button {
  color: #ad1616;
  font-family: Verdana;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
}

#cover {
  position: relative;
  top: 80px;
  left: 0;
  right: 0;
  width: 550px;
  padding: 35px;
  margin: -83px auto 0 auto;
  background-color: #ad1616;
  border-radius: 20px;
  box-shadow: 0 10px 40px #ad1616, 0 0 0 20px;
  transform: scale(0.6);
}

form {
  height: 96px;
}

input[type="text"] {
  width: 100%;
  height: 96px;
  font-size: 60px;
  line-height: 1;
}

input[type="text"]::placeholder {
  color: #ad1616;
}

#s-cover {
  width: 1px;
  padding-left: 35px;
}

button {
  position: relative;
  display: block;
  width: 84px;
  height: 96px;
  cursor: pointer;
}

#s-circle {
  position: relative;
  top: -8px;
  left: 0;
  width: 43px;
  height: 43px;
  margin-top: 0;
  border-width: 15px;
  border: 15px solid #000000;
  background-color: transparent;
  border-radius: 50%;
  transition: 0.5s ease all;
}

button span {
  position: absolute;
  top: 68px;
  left: 43px;
  display: block;
  width: 45px;
  height: 15px;
  background-color: transparent;
  border-radius: 10px;
  transform: rotateZ(52deg);
  transition: 0.5s ease all;
}

button span:before,
button span:after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 45px;
  height: 15px;
  background-color: #000000;
  border-radius: 10px;
  transform: rotateZ(0);
  transition: 0.5s ease all;
}

#s-cover:hover #s-circle {
  top: -1px;
  width: 67px;
  height: 15px;
  border-width: 0;
  background-color: #000000;
  border-radius: 20px;
}

#s-cover:hover span {
  top: 50%;
  left: 56px;
  width: 25px;
  margin-top: -9px;
  transform: rotateZ(0);
}

#s-cover:hover button span:before {
  bottom: 11px;
  transform: rotateZ(52deg);
}

#s-cover:hover button span:after {
  bottom: -11px;
  transform: rotateZ(-52deg);
}
#s-cover:hover button span:before,
#s-cover:hover button span:after {
  right: -6px;
  width: 40px;
  background-color: #000000;
}

</style>
