var myHeaders = new Headers();
myHeaders.append("Cookie", "JSESSIONID=50444A2204FEABB3D34244D4E48F50B7");

// var carId = GetURLParameter('carid');


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
    console.log(objectData.id);
    console.log(objectData.name);
    console.log(objectData.model);
    document.getElementById('inputCarName').value=objectData.name;
    document.getElementById('inputMake').value=objectData.make;
    document.getElementById('inputModel').value=objectData.model;
    document.getElementById('inputYear').value=objectData.year;
    document.getElementById('inputCarDescription').value=objectData.description;
})
