import express from 'express';

let app = express()

app.use(express.json())

app.get('/', (req, res)=> {
    console.log('Get request received');
});

app.post('/', (req, resreq, res) => {   
    console.log('Post request received');  
    console.log(req.body);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000...");
});