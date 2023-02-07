<h1 class="text-center">Add to car inventory</h1>

<label for="inputCarName">Name</label>
<input id="inputCarName" type="text" name="inputCarName" autocomplete="off" /><br>

<label for="inputMake">Make</label>
<input id="inputMake" type="text" name="inputMake" autocomplete="off" /><br>

<label for="inputModel">Model</label>
<input id="inputModel" type="text" name="inputModel" autocomplete="off" /><br>

<label for="inputYear">Year</label>
<input id="inputYear" type="number" name="inputYear" autocomplete="off" /><br>

<label for="inputCarDescription">Description</label>
<textarea id="inputCarDescription" name="inputCarDescription" rows="4" cols="50">
Enter description here...
</textarea><br>

<p><label for="img">Upload Image</label>
<input id="inputCarImage" type="file" id="img" name="inputCarImage" accept="image/*"></p><br>
 


<button class="button1" onclick="input()">Upload Car</button>

<script>

function input() {
  const name = document.getElementById("inputCarName").value;
  const image = "Temp";
  const description = document.getElementById("inputCarDescription").value;
  const make = document.getElementById("inputMake").value;
  const model = document.getElementById("inputModel").value;
  const year = document.getElementById("inputYear").value;

  const url = "https:/breadbops.gq/api/carInventory/post/";

  var details = {
      'name': name,
      'imageLink': image,
      'description': description,
      'make': make,
      'model': model,
      'year': year};

  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  console.log(formBody);
  
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
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
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
  font-size: 2em;
  padding: 0.2em 0.5em;
}   

label {
    font-size: 3em;
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
  font-size: 5em;
}

.button1:hover {
  transition-duration: 1s;
  background-color: #ad1616;
  color: white;
}

</style>