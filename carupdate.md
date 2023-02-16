<head>
<style>
  img{
    width:100px;
    }
</style>
<script>
  function carupdate(){
    var myHeaders = new Headers();
myHeaders.append("Cookie", "JSESSIONID=50444A2204FEABB3D34244D4E48F50B7");

// var carId = GetURLParameter('carid');
let carParams = new URLSearchParams(window.location.search)
let carId = carParams.get('carid')

url = "https://breadbops.gq/api/carInventory/" + carId;
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(url).then((data)=>{
    console.log(data);
    return data.json();
}).then((objectData)=>{
    console.log(objectData.data);
    let carstring="";
    objectData.map((values)=>{
        carstring=`<div>
        <label for="inputCarName">Name</label>
        <input id="inputCarName" type="text" name="inputCarName" value=${values.name} /><br>
</div>`

    });
    document.getElementById("body").innerHTML=carstring;
})
  }
  </script>
</head>
<body onload="carupdate()">

</body>


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
