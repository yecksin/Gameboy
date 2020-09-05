class AudioPlayer{
    constructor(ruta){
        this.src = ruta;
        this.audio = new Audio(this.src);
    }

    play(){
        this.audio.play().then().catch(err => console.log(`Error al reproducir el archivo: ${err}`));

    }
    pause(){
        this.audio.pause();
    }
}