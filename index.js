const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();


const PORT = process.env.PORT ?? 5000;
const DB_URL = process.env.DB_URL ?? '';
const app = express();

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();