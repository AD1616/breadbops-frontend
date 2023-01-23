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
</style>


<label for="inputCarName">Input Car Name</label><br>
<input type="text" name="inputCarName" autocomplete="off" />
<button onclick="carName()" type="submit">Submit</button>

