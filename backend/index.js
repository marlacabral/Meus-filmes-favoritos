const express = require('express');

const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());

const moviesRouter = require('./routers/moviesRoutes');

app.use('/movies', moviesRouter);


app.get('/', (req, res) => {
    res.send('Hello');
})


const port = 3002;
app.listen(port, () => {
    console.log(`Rodando na porta ${port}.`)
});
