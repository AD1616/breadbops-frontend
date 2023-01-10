# FRQ 4

<table>
    <thead>
    <tr>
        <th>Off/On</th>
        <th>Quality</th>
        <th>Luminosity</th>
        <th>Image</th>
    </tr>
    </thead>
    <tbody id="result">
    <!-- generated rows -->
    </tbody>
</table>

<style>
.circle {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>

<script>

function componentToHex(c) {
    c = Math.round(c);
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const resultContainer = document.getElementById("result");

function firstCall() {

    fetch('https://breadbops.gq/api/lights/')
    .then((response) => response.json())
    .then(data => {
        console.log(data);
        
        for (let i = 0; i < data.length; i++) {  

            const tr = document.createElement("tr");
            const on = document.createElement("td");
            const quality = document.createElement("td");
            const luminosity = document.createElement("td");
            const image = document.createElement("div");

            image.className = "circle";
            image.setAttribute("id", "image" + i);
            gray = data[i]["light"]["luminosity"] * 255/100;
            image.style.backgroundColor = rgbToHex(gray, gray, gray);

            luminosity.setAttribute("id", "luminosity" + i);

            if (data[i]["light"]["on"]) {
                on.innerHTML = "On";
            }
            else {
                on.innerHTML = "Off";
            }
            quality.innerHTML = Math.round(data[i]["light"]["quality"]); 
            luminosity.innerHTML = Math.round(data[i]["light"]["luminosity"]); 


            tr.appendChild(on);
            tr.appendChild(quality);
            tr.appendChild(luminosity);
            tr.appendChild(image);

            resultContainer.appendChild(tr);

        }
    })
}

function callAsync() {
    fetch('https://breadbops.gq/api/lights/')
    .then((response) => response.json())
    .then(data => {
        console.log(data);
        
        for (let i = 0; i < data.length; i++) {  

            const image = document.getElementById("image" + i);
            const luminosity = document.getElementById("luminosity" + i);

            gray = data[i]["light"]["luminosity"] * 255/100;
            image.style.backgroundColor = rgbToHex(gray, gray, gray);

            luminosity.innerHTML = Math.round(data[i]["light"]["luminosity"]); 
        }
    })
}
firstCall();

setInterval(callAsync, 1000);

</script>