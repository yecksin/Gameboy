class AudioPlayer{
   
    constructor(ruta){
       
        this.src = ruta;
        this.audio = new Audio(this.src);
        this.progress = document.querySelector(".loading .progreso .barra");
        this.audio.ontimeupdate = () => { this.updateUI(); }
        this.minutos = 0;
        this.segundos = 0;
        // this.initProgressActions();
    }

    play(){
        this.audio.play().then().catch(err => console.log(`Error al reproducir el archivo: ${err}`));

    }
    pause(){
        this.audio.pause();
    }

    setProgress(e){
        const cover = document.querySelector(".loading .progreso");
        console.log("setprogresaa");
        console.log(e);
        const x = e.offsetX;
        const totalX = cover.clientWidth;
        const progress = x / totalX;
        this.setCurrentTime(progress);
    }

    setCurrentTime(progress) {
        this.audio.currentTime = this.audio.duration * progress;
    }


    updateUI() {
        // console.log("Updating UI");
        const total = this.audio.duration;
        const current = this.audio.currentTime;
        const progress = (current / total) * 100;
        // console.log(current);
        this.progress.style.width = `${progress}%`;

        document.querySelector(".porcentajeCarga").innerHTML = `
        <h1 class="textoCarga">
            ${Math.round(progress)}% 
        </h1>
        `;
     
        document.querySelector(".tiempo").innerHTML = `
       
             ${this.ToMinutes(current)}:${this.ToSeconds(current)} - ${this.ToMinutes(total)}:${this.ToSeconds(total)}
      
        `;





        
    }

    ToSeconds(seconds){
        var second = Math.floor(seconds)  % 60;
        second = (second < 10)? '0' + second : second;
        return second;
    }

    ToMinutes(seconds){
        var minute = Math.floor((Math.floor(seconds) / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        return minute;
    }

}

