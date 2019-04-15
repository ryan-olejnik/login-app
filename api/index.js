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

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.CLIENT_ORIGIN);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  console.log('auth header =', req.headers.authorization);
  next();
})

app.use('/api/login', (req, res, next) => {
  const { username, password} = req.body;
  console.log('trying to login username, password =', username, password);

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

app.get('/api/users', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  const { verifyToken } = require('./utils/auth');

  const decodedToken = verifyToken(token);
  console.log('decodedToken =', decodedToken);

  userController.getUserData(token)
  .then(response => {
    console.log('response =', response);
    res.status(response.status);
    res.send(response);
  })
  .catch(err => {
    res.status(500);
    res.send({
      status: 500,
      description: 'Internal server error',
      userData: null
    });
  })
})


app.listen(`${stage.port}`, () => {
  console.log(`Server now listening at localhost:${stage.port}`);
});

module.exports = app;