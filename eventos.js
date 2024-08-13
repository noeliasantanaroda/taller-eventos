const miDiv = document.getElementById('miDiv');
miDiv.addEventListener('click', function() {
    alert('Hola! Soy el div');
});

const boton = document.getElementById('miBoton');
boton.addEventListener('click', function(event) {
    event.stopPropagation();
});

