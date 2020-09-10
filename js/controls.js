let index=0;
let tieneImagen = false;
let baile = false;
const pantalla = document.querySelectorAll(".capa2");

let cancion = new AudioPlayer(musica[index].ruta);

function changeCover(cancion){
document.querySelector('.capa1').innerHTML= `
<div class="cont-capa2">
    <div class="capa2" style="background-image: url('${cancion.cover}');">
    <div class="pause-cont">
    <img id="pause" class="pause hideIcon pause-fadeIn " src="assets/icons/pause.svg" alt="Kiwi standing on oval">
   </div>
        <div class="contadorTiempo">

            <div class="tiempo">
            1:35 - 2:35
            </div>
            <div class="info info-fadeOn ">
            ${cancion.nombre} - ${cancion.artista}
            </div>

  
        </div>

        <div class="loading">

      
        <div></div>
        <div class="black"></div>
        <div></div>

        <div class="black"></div>
        <div class="progreso" onclick="cancion.setProgress(event)">
            <div class="porcentajeCarga">
                <h1 class="textoCarga">
                    50%
                </h1>
            </div>
            <div class="barra">
            </div>
        </div>
        <div class="black"></div>

        <div></div>
        <div class="black"></div>
        <div></div>

        </div>
    </div>
</div>
`;
}
function arriba(){
    tieneImagen = true;
    console.log("presionaste arriba");
    cancion.pause();
    document.querySelector(".changew-"+(index+1)).classList.remove('changew');
    index++;
    if (index > musica.length -1){
        console.log("mayor");
        index=0;
    }
    document.querySelector(".changew-"+(index+1)).classList.add('changew');
    console.log("cantidad "+musica.length);
    console.log("index: "+ index);
    changeCover(musica[index]);
    document.querySelector('.cont-capa2').classList.add('capa2-fadeIn');
    cancion = new AudioPlayer(musica[index].ruta)
    cancion.play();
    ponerBaile ();
}
function izq(){
    console.log("presionaste izquierda");
    cancion.volumeDown();
   
}
function medio(){
    console.log("presionaste medio");
    cancion.setCurrentTime(0);
    cancion.play();
    
   
}
function der(){
    console.log("presionaste dercha");
    cancion.volumeUp();
}
function abajo(){
    tieneImagen = true;
    console.log("presionaste abajo");
    cancion.pause();
    document.querySelector(".changew-"+(index+1)).classList.remove('changew');
    index--;
    if (index < 0 ){
        console.log("mayor");
        index=musica.length-1;
    }
    document.querySelector(".changew-"+(index+1)).classList.add('changew');
    console.log("cantidad "+musica.length);
    console.log("index: "+ index);
    changeCover(musica[index]);
    document.querySelector('.cont-capa2').classList.add('capa2-fadeIn');
    cancion = new AudioPlayer(musica[index].ruta)
    cancion.play();  
    ponerBaile ();
}
function a(){
    if(tieneImagen){
        cancion.play();
        document.querySelector("#pause").classList.add("hideIcon")
        ponerBaile ();
    }
    console.log("presionaste a");
    // document.querySelector(".changew-"+(index+1)).classList.add('changew');
    
}
function b(){
    console.log("presionaste b");
    cancion.pause();
    document.querySelector("#pause").classList.remove("hideIcon")
    // document.querySelector(".changew-"+(index+1)).classList.remove('changew');
    quitarBaile();
}
function select(){
    console.log("presionaste select");
    document.querySelector('.lista-contenedor').classList.toggle('open');
   
}
function start(){
    console.log("presionaste start");
    baile=!baile;
    console.log(baile);
}

function quitarBaile (){
    if(baile){
        document.querySelector('.contenedor').classList.remove('animacionBaile');
    }
}

function ponerBaile (){
    if(baile){
        document.querySelector('.contenedor').classList.add('animacionBaile');
    }
}
