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
    console.log(objectData.name);
    document.getElementById('inputCarName').innerText=objectData.name;
})
