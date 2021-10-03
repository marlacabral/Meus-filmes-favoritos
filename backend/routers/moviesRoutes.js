const express = require('express');
const router = express.Router();

const list =[
    {
        id: Date.now(),
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.cancaonova.com%2Fcnimages%2Fcanais%2Fuploads%2Fsites%2F9%2F2015%2F11%2FDica-de-Filme-Interestelar.jpg&f=1&nofb=1",
        name: "Interestellar",
        genre: "Ficction Cientific",
        note: "9"
    },
    {
        id: Date.now(),
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.qie-5I6Zo_foTVRlEfjclgHaEK%26pid%3DApi&f=1",
        name: 'Eat, Pray, Love',
        genre: 'Romance/Drama',
        note: '7'
    },
    {
        id: Date.now(),
        image:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.winwallpapers.net%2Fw1%2F2013%2F12%2FToy-Story-3-2010-Wallpapers-3.jpg&f=1&nofb=1",
        name: 'Toy Story',
        genre: 'Children/Comedy',
        note: '10'
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

router.put('/edit/:id', (req, res) => {
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