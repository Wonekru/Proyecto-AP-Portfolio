let menuVisible = false;
//Funcion para mostrar o ocultar menu
function mostrarOcultarMenu(){ //definimos la funcion
    if(menuVisible){ //evaluamos si la variable menuVisible es verdadera
        document.getElementById("nav").classList =""; //si menuVisible es TRUE aqui se "ocultan" tosas las clases del CSS aplicadas al elemento HTML con ID "nav"
    }else{ //si menuVisible es FALSE entonces se ejecuta lo siguiente
        document.getElementById("nav").classList ="responsive"; //agrega la clase CSS "responsive" al elemento HTML con el identificador nav.
        menuVisible = true; //se asigna un valor de true a la variable menuVisible, indicando que el menú está visible.
    }
}

//Funcion para ocultar el menu cuando se selecciona una opcion
function seleccionar (){ //definimos la funcion
    document.getElementById("nav").classList =""; //ocultamos los elementos con classe "nav"
    menuVisible = false; //actualiza la variable menuVisible a false para indicar que el menú está oculto.

}

//funcion para las animaciones de la barras de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("oficce");
        habilidades[4].classList.add("wordpress");
        habilidades[5].classList.add("proyect");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("independiente");
    }
}

//detectar el scrooling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}