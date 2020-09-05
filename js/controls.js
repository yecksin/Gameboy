let index=0;
let cancion = new AudioPlayer(musica[index].ruta);

function changeCover(link){
document.querySelector('.capa1').innerHTML= `<div class="cont-capa2"><div class="capa2" style="background-image: url('${link}');"></div></div>`;
}
function arriba(){

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
    changeCover(musica[index].cover);
    document.querySelector('.cont-capa2').classList.add('capa2-fadeIn');
    cancion = new AudioPlayer(musica[index].ruta)
    cancion.play();


    
}
function izq(){
    console.log("presionaste izquierda");
    
   
}
function medio(){
    console.log("presionaste medio");
}
function der(){
    console.log("presionaste dercha");
}
function abajo(){
    console.log("presionaste abajo");
    

   
    
    cancion.pause();
    document.querySelector(".changew-"+(index+1)).classList.remove('changew');
    index--;
    if (index < 0 ){
        console.log("mayor");
        index=4;
    }
    document.querySelector(".changew-"+(index+1)).classList.add('changew');
    console.log("cantidad "+musica.length);
    console.log("index: "+ index);
    changeCover(musica[index].cover);
    document.querySelector('.cont-capa2').classList.add('capa2-fadeIn');
    cancion = new AudioPlayer(musica[index].ruta)
    cancion.play();

    
    
}
function a(){
    console.log("presionaste a");
    cancion.play();
    document.querySelector(".changew-"+(index+1)).classList.add('changew');
    // document.querySelector('.contenedor').classList.add('animacionBaile');
}
function b(){
    console.log("presionaste b");
    cancion.pause();
    document.querySelector(".changew-"+(index+1)).classList.remove('changew');
    // document.querySelector('.contenedor').classList.remove('animacionBaile');
}
function select(){
    console.log("presionaste select");
    document.querySelector('.lista-contenedor').classList.toggle('open');
}
function start(){
    console.log("presionaste start");
    
}

