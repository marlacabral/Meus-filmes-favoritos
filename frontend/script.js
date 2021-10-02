const { url } = require("inspector");

const urlApi = "http://localhost:3002/movies";
const list = document.getElementById('list');
let edit = false;
let idEdit = 0;

const getMovies = async () => {
    const response = await fetch(urlApi);
    const data = await response.json();

    data.map((movie) => {
        list.insertAdjacentHTML('beforeend', `
        <div class='card-movie' 
            <img class='card-img'>${movie.image}</img>
            <p class='card-text'>${movie.name}</p>
            <p class='card-genre'>${movie.genre}</p>
            <p class='card-note'>${movie.note}</p>
            <button type='button' class='btn-edit' onclick='putMovie(${movie.id})'>Edit</button>
            <button type='button' class='btn-delete' onclick='deleteMovie(${movie.id})'>Delete</button>
        </div>
        `)
    })
}
getMovies();

const submitForm = async (evento) => {
    evento.preventDefault();

    let image = document.getElementById('image');
    let name = document.getElementById('name');
    let genre = document.getElementById('genre');
    let note = document.getElementById('note');

    const movie = {
        image: image.value,
        name: name.value,
        genre: genre.value,
        note: note.value
    }

    if(!edit) {
        const request = new Request(`${urlApi}/add`, {
            method: 'POST',
            body:JSON.stringify(movie),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })

        const response =  await fetch(request);

        const result = await response.json();
        
        if(result){
            getMovies();
        }

}else{
    const request = new Request(`${urlApi}/${idEdit}`,{
        method: 'PUT',
        body:JSON.stringify(movie),
        headers: new Headers({
            'Content-Type': 'application/json'

    })
 })

 const response = await fetch(request);
 const result = await response.json();

 if(result){
     getMovies();
 }
}

image.value = '';
name.value = '';
genre.value = '';
note.value = '';

list.innerHTML = '';
}

const getMovieById = async (id) => {
    const response = await fetch(`${urlApi}/${id}`);
    return movie = response.json();
}

const putMovie = async (id) => {
    edit = true;
    idEdit = id;

    const movie = await getMovieById(id);

    let imageEl = document.getElementById('image');
    let nameEl = document.getElementById('name');
    let genreEl = document.getElementById('genre');
    let noteEl = document.getElementById('note');

    imageEl.value = movie.image;
    nameEl.value = movie.name;
    genreEl.value = movie.genre;
    noteEl.value = movie.note
}

const deleteMovie = async (id) => {
    const request = new Request(`${urlApi}/${id}`, {
        method: 'DELETE',
    })

    const response = await fetch(request);
    const data = await response.json();

    list.innerHTML = '';
    getMovies();
}