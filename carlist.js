fetch("https://breadbops.gq/api/carInventory/all").then((data)=>{
    console.log(data);
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].name);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`<tr>
        <td>${values.name}</td>
        <td>${values.make}</td>
        <td>${values.model}</td>
        <td>${values.year}</td>
        <td>${values.description}</td>
        <td>${values.image}</td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
})