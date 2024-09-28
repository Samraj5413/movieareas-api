import express from "express"

const app = express();
const PORT = 6969;

app.get('/', (req, res) => {
    res.json({ msg: "Hello students!" });
});

// CRUD functionality

// R - for reading 

app.get('/movies', () => { });

// C - for creating 

app.post('/movies', () => { });

// U - for updating 

app.put('/movies/:id', () => { });


// D - for deleting 

app.delete('/movies/:id', () => { });

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});