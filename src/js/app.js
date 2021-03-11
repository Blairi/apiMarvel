document.addEventListener('DOMContentLoaded', () =>{

    mostrarPersonajes();
});

const hero = document.querySelector('.hero');
const contenedorPersonajes = document.querySelector('.contenedor-personajes');

async function mostrarPersonajes() {
    try {

        const url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=eb4bad3fa005b713656d51fcd495465d&hash=4e88f6ae6a4c20f7ca1e2623672a9aad';

        const resultado = await fetch(url);
        const db = await resultado.json();

        // console.log(db);

        //thumbnail.path
        const { data } = db;

        console.log(data.results);

        //Crear portada utilizando solo una imagen
        const { thumbnail } = data.results[2];

        const imagenHero = document.createElement('IMG');
        const urlHero = thumbnail.path+'.'+thumbnail.extension;
        imagenHero.setAttribute('src', urlHero);
        hero.appendChild(imagenHero);


        //Pintamos todos los personajes
        data.results.forEach(personaje => {

            //Extraemos del objeto
            const { id, name, description, thumbnail} = personaje;

            //Crear contenedor del personaje
            const contenedorPersonaje = document.createElement('DIV');
            contenedorPersonaje.classList.add('personaje');

            //CrearPersonaje

            //Imagen de personaje
            //Creamos el contenedor de la imagen
            const thumb = document.createElement('DIV');
            thumb.classList.add('thumb');
            //Creamos la imagen
            const imagenPersonaje = document.createElement('IMG');
            //Construimos la url
            urlPersonaje = thumbnail.path +'.'+thumbnail.extension;
            //Le pasamos la url a la imagen creada
            imagenPersonaje.setAttribute('src', urlPersonaje);

            thumb.appendChild(imagenPersonaje);

            contenedorPersonaje.appendChild(thumb);

            //Nombre de personaje
            const nombrePersonaje = document.createElement('P');
            nombrePersonaje.classList.add('nombre-personaje');
            nombrePersonaje.textContent = name;
            contenedorPersonaje.appendChild(nombrePersonaje);

            //Descripcion de personaje
            const descripcionPersonaje = document.createElement('P')
            descripcionPersonaje.classList.add('descripcion-presonaje');
            descripcionPersonaje.textContent = description;
            contenedorPersonaje.appendChild(descripcionPersonaje);

            //Inyectar todo en el DOM
            contenedorPersonajes.appendChild(contenedorPersonaje);
        });

    } catch (error) {
        console.log(error);
    }
}