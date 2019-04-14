require('dotenv').config();

const express = require('express'); 
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const environment = process.env.NODE_ENV;
const stage = require('./config')[environment];

const userController = require('./controllers/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

if (environment !== 'prod') {
  app.use(logger('dev'));
}

app.use('/api/login', (req, res, next) => {
  const { username, password} = req.body;

  userController.login(username, password)
  .then(response => {
    res.status(response.status);
    res.send(response);
  })
  .catch(err => {
    console.log('err =', err);
    res.status(500);
    res.send(err);
  });
});

app.use('/api/test', (req, res, next) => {
  res.send('Heyyooooooo!');
});

app.listen(`${stage.port}`, () => {
  console.log(`Server now listening at localhost:${stage.port}`);
});

module.exports = app;