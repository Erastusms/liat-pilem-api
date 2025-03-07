const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());

app.listen(port, () => {
    console.log("Server is running in port: http://localhost:5000");
});
