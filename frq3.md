# FRQ 3

<b>+: addition</b>
<br>
<b>-: subtraction</b>
<br>
<b>*: multiplication</b>
<br>
<b>d: division</b>
<br>
<b>m: modulus</b>
<br>
<b>exp: exponent</b>
<br>
<b>ncr: combinations (used in statistics)</b>
<br>
<b>log: logarithm</b>
<br>
<b>pi: auto fills 3.1415</b>
<br>

<p id="eqResult"></p>

<input id="inputEq" placeholder="Input equation here">
    <button onclick="getEq(getInputEq())">Calculate Equation</button>

<script>

function getInputEq(){
    let equation = document.getElementById("inputEq").value;
    console.log(equation);
    return equation;
}

function getEq(eq) {
    eqResult = document.getElementById("eqResult");
    fetch('https://breadbops.gq/api/calculator/' + eq)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        eqResult.innerHTML = "The answer is: " + data.Result;
    })
}

</script>