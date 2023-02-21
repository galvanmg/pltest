let ubicacionPrincipal = window.pageYOffset; //0

  AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //180
    if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual; //200

})

// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo= true;
    }

    enlacesHeader.classList.toggle("menudos")
})



// Obtener el contenedor de imágenes
const contenedorImagenes = document.querySelector('.contenedor-imagenes');

// Función para comprobar si el contenedor de imágenes es visible en la ventana actual
function isContenedorVisible() {
  const rect = contenedorImagenes.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Función para activar o desactivar la animación según si el contenedor es visible o no
function animarContenedor() {
  const imagenes = contenedorImagenes.querySelectorAll('img');
  if (isContenedorVisible()) {
    imagenes.forEach(img => img.classList.add('animar'));
  }
}

// Activar la animación al cargar la página
animarContenedor();

// Activar la animación cuando se produce un evento de desplazamiento
window.addEventListener('scroll', animarContenedor);