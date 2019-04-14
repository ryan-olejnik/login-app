require('dotenv').config();

const userController = require('../controllers/users');


console.log('seeding users...')
function seedUsers() {
  Promise.all([
    userController.create('ryan', 'password'),
    userController.create('jane', 'password'),
    userController.create('john', 'password'),
  ])
  .then(res => {
    res.forEach(res => {
      console.log('Created user', res.user.username);
    })
  })
  .catch(err => {
    // console.log(err.description);
  });

  return;
}

seedUsers();



