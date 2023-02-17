# Car Specs

<style>
input[type=text] {
  width: 130px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 10px;
}


.button {
  background-color: #AD1616;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;   
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>


<script>

let table = document.getElementById("idk");

function getModelid(){
    let inputModelid = document.getElementById("inputModelid").value;
    return inputModelid;
}
function getGenerationid(){
    let inputGeneration = document.getElementById("inputGeneration").value;
    return inputGeneration;
}
function getTrimid(){
    let inputTrim = document.getElementById("inputTrim").value;
    return inputTrim;
}
function getSpecs(){
    let inputSpec = document.getElementById("inputSpec").value;
    return inputSpec;
}


function getMake() {
     const options = {
      method: 'GET', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'include', 
      headers: {
          'Content-Type': 'application/json'
          
      },
  };
    result = document.getElementById("getSpecResult");
    
    // Fetch data from API
    fetch('https://breadbops.gq/api/specs/makes', options)
    .then(response => response.json())
    .then(data => 
     {

const table = document.getElementById('idk');
        while (table.rows.length > 1) {
          table.deleteRow(-1);
        }
        console.log(data);
        for (const car of data) {
          const row = table.insertRow(-1);
          row.insertCell(-1).innerHTML = car.name;
          row.insertCell(-1).innerHTML = car.id;
        }

        result.innerHTML =  yearparam + brandparam + data;

    })
}

function getModel(modelparam) {
     const options = {
      method: 'GET', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'include', 
      headers: {
          'Content-Type': 'application/json'
          
      },
  };
    result = document.getElementById("getModels");
    // console.log(yearparam);
    // console.log(brandparam);
    // Fetch data from API
    fetch('https://breadbops.gq/api/specs/models/' + modelparam, options)
    .then(response => response.json())
    .then(data => 
     {

const table = document.getElementById('idk');
        while (table.rows.length > 1) {
          table.deleteRow(-1);
        }
        console.log(data);
        for (const car of data) {
          const row = table.insertRow(-1);
          row.insertCell(-1).innerHTML = car.name;
          row.insertCell(-1).innerHTML = car.id;
        }

        result.innerHTML =  modelparam + brandparam + data;

    })
}

function getGeneration(generationparam) {
     const options = {
      method: 'GET', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'include', 
      headers: {
          'Content-Type': 'application/json'
          
      },
  };
    result = document.getElementById("getModels");
    // console.log(yearparam);
    // console.log(brandparam);
    // Fetch data from API
    fetch('https://breadbops.gq/api/specs/generations/' + generationparam, options)
    .then(response => response.json())
    .then(data => 
     {

const table = document.getElementById('idk');
        while (table.rows.length > 1) {
          table.deleteRow(-1);
        }
        console.log(data);
        for (const car of data) {
          const row = table.insertRow(-1);
          row.insertCell(-1).innerHTML = car.name;
          row.insertCell(-1).innerHTML = car.id;
        }

        result.innerHTML =  generationparam + modelparam + data;

    })
}
function getTrim(trimparam) {
     const options = {
      method: 'GET', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'include', 
      headers: {
          'Content-Type': 'application/json'
          
      },
  };
    result = document.getElementById("getModels");
    // console.log(yearparam);
    // console.log(brandparam);
    // Fetch data from API
    fetch('https://breadbops.gq/api/specs/trims/' + trimparam, options)
    .then(response => response.json())
    .then(data => 
     {

const table = document.getElementById('idk');
        while (table.rows.length > 1) {
          table.deleteRow(-1);
        }
        console.log(data);
        for (const car of data) {
          const row = table.insertRow(-1);
          row.insertCell(-1).innerHTML = car.name;
          row.insertCell(-1).innerHTML = car.id;
          row.insertCell(-1).innerHTML = car.series;
          row.insertCell(-1).innerHTML = car.generation;
          row.insertCell(-1).innerHTML = car.trim;
          row.insertCell(-1).innerHTML = car.bodyType;


        }

        result.innerHTML =  trimparam + modelparam + data;

    })
}

function getSpec(specparam) {
     const options = {
      method: 'GET', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'include', 
      headers: {
          'Content-Type': 'application/json'
          
      },
  };
    result = document.getElementById("getModels");
    // console.log(yearparam);
    // console.log(brandparam);
    // Fetch data from API
    fetch('https://breadbops.gq/api/specs/specs/' + specparam, options)
    .then(response => response.json())
    .then(data => 
    {

      let txt = "";
      for (let x in data) 
      {
        txt += data[x] + " ";
      };
      console.log(data);
      console.log(txt);
      
document.getElementById("demo").innerHTML = data + txt;
document.getElementById("body").innerHTML = data.bodyType;
document.getElementById("json").innerHTML = JSON.stringify(data, null,'\t');


      })

}

function getIntegra() {
     const options = {
      method: 'GET', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'include', 
      headers: {
          'Content-Type': 'application/json'
          
      },
  };
    result = document.getElementById("getModels");
    // console.log(yearparam);
    // console.log(brandparam);
    // Fetch data from API
    fetch('http://localhost:8196/api/specs/integra/1', options)
    .then(response => response.json())
    .then(data => 
    {

      let txt = "";
      for (let x in data) 
      {
        txt += data[x] + " ";
      };
      console.log(data);
      console.log(txt);
      
document.getElementById("demo").innerHTML = data + txt;
document.getElementById("body").innerHTML = data.bodyType;
document.getElementById("json").innerHTML = JSON.stringify(data, null,'\t');

const table = document.getElementById('idk');
        while (table.rows.length > 1) {
          table.deleteRow(-1);
        }
        console.log(data);
        for (const car of Object.keys(data)) {
              var iteration = data[car];
                  console.log(car, iteration);
document.getElementById("car").innerHTML = car;
document.getElementById("iteration").innerHTML = iteration;



        }

        result.innerHTML =  yearparam + brandparam + data.Results;

    }
      )

}
</script>
### Car Models for Specific Year
<a href="{{site.baseurl}}/spec">reset</a>

<body> 

<input type="text" name="search" id="inputModelid" placeholder="Make Id">
<input type="text" name="search" id="inputGeneration" placeholder="Model Id">
<input type="text" name="search" id="inputTrim" placeholder="Trim Id">
<input type="text" name="search" id="inputSpec" placeholder="Spec Id">
<button class="button" id= "button" onclick="getMake()">Get All Makes</button>
<button class="button" id= "button" onclick="getModel(getModelid())">Get Models</button>
<button class="button" id= "button" onclick="getGeneration(getGenerationid())">Get Generations</button>
<button class="button" id= "button" onclick="getTrim(getTrimid())">Get Trims</button>
<button class="button" id= "button" onclick="getSpec(getSpecs())">Get Specs</button>
<button class="button" id= "button" onclick="getIntegra()">Get Integra</button>



<p id="demo">spec placeholder</p>
<p id="body">body placeholder</p>
<!-- <p id="car">id thing placeholder</p> -->
<!-- <p id="iteration">other placeholder</p> -->
<p id="json">json placeholder</p>


<table id="idk"></table>

</body>

<!-- makes sure you can press enter to submit the form -->
<script>
  var input = document.getElementById("inputModelid");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
});


</script>