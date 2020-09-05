
musica = [
    {
        ruta:'assets/sounds/Four More Weeks - Vans in Japan.mp3',
        nombre:'Four More Weeks',
        genero:'Alternativa y punk',
        artista:'Vans in Japan',
        duración:'3:04',
        cover:'https://cdn.pixabay.com/photo/2020/08/29/08/33/woman-5526487_960_720.jpg'
    },
    {
        ruta:'assets/sounds/Electro Fight - Kwon.mp3',
        nombre:'Electro Fight',
        genero:'Hiphop y rap',
        artista:'Kwon',
        duración:'2:38',
        cover:'https://cdn.pixabay.com/photo/2016/03/11/14/21/brakedance-1250354_960_720.jpg'
    },
    {
        ruta:'assets/sounds/Berlin at Night - Dan Henig.mp3',
        nombre:'Berlin at Night',
        genero:'Dance y electrónica',
        artista:'Dan Henig',
        duración:'2:25',
        cover:'https://cdn.pixabay.com/photo/2018/06/30/09/29/music-3507317_960_720.jpg'
    },
    {
        ruta:"assets/sounds/Don't Wanna Be - Kwon.mp3",
        nombre:"Don't Wanna Be",
        genero:'Dance y electrónica',
        artista:'Kwon',
        duración:'1:43',
        cover:'https://cdn.pixabay.com/photo/2020/09/01/09/46/portrait-5534757_960_720.jpg'
    },
    {
        ruta:'assets/sounds/Lofi Mallet - Kwon.mp3',
        nombre:'Lofi Mallet',
        genero:'Dance y electrónica',
        artista:'Kwon',
        duración:'2:24',
        cover:'https://cdn.pixabay.com/photo/2014/05/22/21/46/mixing-desk-351478_960_720.jpg'
    }
]
let texto=`<div class="figura"></div><div class="figura2 animateColor"></div>`;
let cont=0;
musica.forEach(cancion => {
    console.log(cancion.nombre);
    
   cont++;
    texto+=`
    <div class="cantion-contenedor">
    <div class="cancion changew-${cont}">
        <h1 >${cancion.nombre}</h1>
    </div>
    </div>
    
    `;

    
})
document.querySelector('.lista-contenedor').innerHTML=texto;