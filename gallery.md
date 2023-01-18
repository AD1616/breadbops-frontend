<h2>Gallery</h2>

<style>
    #content {
        height:auto;
        width:100%;
    }
    column-width:auto;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    div img{
        /* width: 400px;
        height: 300px; */
        /* border: 2px solid brown;
        border-radius:13px;
        box-shadow: 4px 7px 7px 0px blue;  */
        cursor: pointer;
        margin: 10px;
        transition: 400ms;
    }
    div img:hover {
        /* filter: grayscale(1); */
        transform: scale(1.1);
    }
    .text { 
    background-color:#000000;
    position: relative; 
    top: 50%; 
    left: 50%; 
    transform: translate(120px, -295px); 
    color: white; 
    font-size: 24px; 
    text-align: center; 
    visibility: hidden; 
  } 
 
  /* Show the text on hover */ 
  img:hover + .text { 
    visibility: visible; 
  } 
</style>
<div class="container-fluid">
<div class="row">
 <div class="column">
            <img src="assets/images/2002sc430.png">
            <div class="text">2002 Lexus SC430</div> 
            <img src="assets/images/2005tacoma.png">
            <div class="text">2005 Toyota Tacoma</div> 

 </div>
<div class="column">
            <img src="assets/images/2007silverado.png">
            <div class="text">2007 Chevrolet Silverado</div> 
            <img src="assets/images/2008sienna.png">
            <div class="text">2008 Toyota Sienna</div> 
</div>
<div class="column">
            <img src="assets/images/2007silverado.png">
            <div class="text">2007 Chevrolet Silverado</div> 
            <img src="assets/images/2008sienna.png">
            <div class="text">2008 Toyota Sienna</div> 

</div>
</div>
</div>


<!-- plans for backend: easy to add new images + links -->





