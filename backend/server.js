const express = require('express');
const cors = require('cors');
const path = require('path');
var compression = require('compression')

const route = require("./routes/routes");

const app = express();
app.use(compression())
app.use(cors());

app.use('/api/v1',route);

app.listen(3000,()=>{
    console.log("Server started at 3000");
})