const express = require('express');
const app = express()
const cors = require('cors');
app.use(express.json());
app.use(cors());

const moviesRouter = require('./routers/moviesRoutes')

app.use('/movies', moviesRouter)


app.get('/', (req, res) => {
    res.send('Hello');
})


const port = 3002;
app.listen(port, () => console.log(`Rodando na porta ${port}.`));

