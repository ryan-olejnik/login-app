require('dotenv').config();

const userController = require('../controllers/users');


console.log('seeding users...')
function seedUsers() {
  Promise.all([
    userController.create('john_snow', 'password', 'winter is coming'),
    userController.create('cersi_lannister', 'password', 'hear me roar'),
    userController.create('theon_greyjoy', 'password', 'we do not sow')
  ])
  .then(res => {
    res.forEach(res => {
      console.log('Created user', res.user.username);
    })
    console.log('\nFinished! Press CTRL-C to exit');
  })
  .catch(err => {
    console.log(err.description);
    console.log('\nFinished! Press CTRL-C to exit');
  });
}

seedUsers();
