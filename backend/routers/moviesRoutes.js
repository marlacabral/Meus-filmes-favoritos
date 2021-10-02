const express = require('express');
const router = express.Router();

const list =[
    {
        id: 1,
        name: 'Interestellar',
        image:'https://optclean.com.br/wp-content/uploads/2016/05/Filme-Interestelar-1280x720.jpg',
        genre: 'Ficction Cientific',
        note: '8.5'
    },
    {
        id: 2,
        name: 'Eat, Pray, Love',
        image:'https://www.ideiasnutritivas.com/content/uploads/2020/09/15-licoes-inspiradoras-do-filme-comer-rezar-e-amar.jpg',
        genre: 'Romance/Drama',
        note: '7.5'
    },
    {
        id: 3,
        name: 'Toy Story',
        image:'https://i1.wp.com/cloud.estacaonerd.com/wp-content/uploads/2019/05/23005512/toy-story-4-1171727-1280x0.jpeg?fit=1280%2C720&ssl=1',
        genre: 'Children/Comedy',
        note: '9.8'
    }
]

router.get('/', (req, res) => {
    res.send(list)
})

router.get = ('/movies/:id', (req, res) => {
    const idParam = req.params.id; 
    const movie = list[id];
    res.send(movie);
})

router.post = ('/add', (req, res) => {
    const movie = req.body.movies;
    const id = list.length;
    list.push(movie);

    res.send(`Movie add with sucess: ${movie}. The ID of movie is ${id}.`)

})

router.put = ('/edit/:id', (req, res) => {
    const id = req.params.id -1;
    const movie = req.body.params;
    const oldMovie = list[id];
    list[id] = movie;

    res.send(`Movie changed with sucess: ${movie}. The ID of movie is ${id}.`)
   
})

router.delete = ('/delete/:id', (req, res) => {
    const id = req.params.id -1;
    list.splice(id,1)
    delete movies[id];
    res.send(movie);
})

module.exports = router;