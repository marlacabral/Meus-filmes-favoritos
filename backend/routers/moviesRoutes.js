const express = require('express');
const router = express.Router();

const list =[
    {
        id: Date.now(),
        image:"https://optclean.com.br/wp-content/uploads/2016/05/Filme-Interestelar-1280x720.jpg",
        name: "Interestellar",
        genre: "Ficction Cientific",
        note: "8"
    },
    {
        id: Date.now(),
        image:"https://www.ideiasnutritivas.com/content/uploads/2020/09/15-licoes-inspiradoras-do-filme-comer-rezar-e-amar.jpg",
        name: 'Eat, Pray, Love',
        genre: 'Romance/Drama',
        note: '7.5'
    },
    {
        id: Date.now(),
        image:"https://st.depositphotos.com/2036173/2101/i/600/depositphotos_21016213-stock-photo-isolated-donkey.jpg",
        name: 'Toy Story',
        genre: 'Children/Comedy',
        note: '9.8'
    }
]

router.get('/', (req, res) => {
    res.send(list)
})

router.get('/:id', (req, res) => {
    const idParam = req.params.id; 
    const index = list.findIndex(movie => movie.id == idParam);
    const movie = list[index];
    res.send(movie);
})

router.put('/:id', (req, res) => {
    const movieEdit = req.body;
    const id = req.params.id;
    let oldMovie = list.find((movie) => movie.id == id);

    oldMovie.image = movieEdit.image;
    oldMovie.name = movieEdit.name;
    oldMovie.genre = movieEdit.genre;
    oldMovie.note = movieEdit.note;

    res.send({
        message: 'Movie changed with sucess.',
    })
   
})

router.post('/add', (req, res) => {
    const movie = req.body;
    movie.id = Date.now();
    list.push(movie);
    
    res.status(201).send({
        message:'Movie add with sucess.'
    })
    
})

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    const index = list.findIndex((movie) => movie.id == id);    
    list.splice(index, 1);
    
    res.send({
        message:'Movie deleted with sucess.',
    })
})

module.exports = router;