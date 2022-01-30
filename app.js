const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const customizeRoutes = require('./routes/customizeRoutes');
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
app.use('/lofichillav1morning', (req, res) => res.render('combinations/lofichillav1morning'));
app.use('/lofichillav1dusk', (req, res) => res.render('combinations/lofichillav1dusk'));
app.use('/lofichillav1night', (req, res) => res.render('combinations/lofichillav1night'));
app.use('/lofichillav2morning', (req, res) => res.render('combinations/lofichillav2morning'));
app.use('/lofichillav2dusk', (req, res) => res.render('combinations/lofichillav2dusk'));
app.use('/lofichillav2night', (req, res) => res.render('combinations/lofichillav2night'));
app.use('/lofichillav3morning', (req, res) => res.render('combinations/lofichillav3morning'));
app.use('/lofichillav3dusk', (req, res) => res.render('combinations/lofichillav3dusk'));
app.use('/lofichillav3night', (req, res) => res.render('combinations/lofichillav3night'));
app.use('/lofidancemorning', (req, res) => res.render('combinations/lofidancemorning'));

app.use((req, res) => {
  res.status(404).render('404', {title: '404'});
})

