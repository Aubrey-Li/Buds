const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

require('dotenv').config();
const port = 3000;
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// view engine
app.set('view engine', 'ejs');

// MongoDB database connection
const dbURI = process.env.DB_CONN;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/profile', (req, res) => res.render('profile'));
app.use(authRoutes);
app.use('/customize', (req, res) => res.render('customize'));
app.use((req, res) => {
  res.status(404).render('404', {title: '404'});
})

