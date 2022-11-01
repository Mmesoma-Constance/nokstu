 // Get the modal
 var modal = document.getElementById('id01', 'id02', 'id03');
    
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

 function openNav() {
document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
document.getElementById("myNav").style.width = "0%";
}

function myFunction(x) {
x.classList.toggle("change");
}

