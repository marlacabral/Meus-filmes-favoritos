const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const moviesRouter = require('./routers/moviesRoutes');

app.use('/movies', moviesRouter);


app.get('/', (req, res) => {
    res.send('Hello');
})


const port = 3000;
app.listen(port, () => {
    console.log(`O servidor está rodando na porta http://localhost:${port}/`)
});
