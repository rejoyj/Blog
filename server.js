const express = require('express');
const path = require('path');

let initial_path = path.join(__dirname,"public");

const app = express();
app.use(express.static())
