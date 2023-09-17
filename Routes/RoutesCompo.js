const data = require("../DataStore/DataStore")

const Home = (req, res)=>{
    res.send(data);
}

module.exports = Home;