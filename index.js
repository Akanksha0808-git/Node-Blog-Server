const express = require('express');
const cors = require("cors");
const PORT=5000;
const Home = require('./Routes/RoutesCompo');

const app = express();

// Corspolicy
app.use(cors({
    origin : "*"
}))

// body parser
app.use(express.json());


// rest Api
app.get("/", Home)



app.listen(PORT,()=>{
    console.log(`Server is Runing at http://localhost:${PORT}`)
})