class AudioPlayer{
    constructor(){
        this.src = 'assets/sounds/1.mp3'
        this.audio = new Audio(this.src);
    }

    play(){
        this.audio.play().then().catch(err => console.log(`Error al reproducir el archivo: ${err}`));

    }
    pause(){
        this.audio.pause();
    }
}