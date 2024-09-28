import express from "express"


const router = express.Router();
// CRUD functionality
// R - for reading 

router.get('/', (req, res) => {
    res.send("Get all movie lists");
});

// C - for creating 

router.post('/', (req, res) => {
    res.send("Create a movie");
});

// U - for updating 

router.put('/:id', (req, res) => {
    res.send("Update a movie");
});

// D - for deleting 

router.delete('/:id', (req, res) => {
    res.send("Delete a movie");
});

export default router;