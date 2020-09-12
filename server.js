const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

/*
**IMPORT ROUTES
*/
const cardsRoute = require('./routes/cards');
const authRoute = require('./routes/auth');

//instatiaste the app
const app = express();


/*
**MIDDLEWARE
*/
app.use(cors());
app.use(express.json());
app.use('/api/v1/cards', cardsRoute);
app.use('/api/v1/users', authRoute);

/*
**CONNECT TO DATABASE
*/
mongoose.connect(process.env.DB_CONNECTION,  { useNewUrlParser: true, useUnifiedTopology: true } ,() => {
	console.log('Connect to database');
})


/*
**DEFINE PORT
*/
const PORT = process.env.PORT || 4000;


/*
**LISTEN ON THE PORT
*/
app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`);
})