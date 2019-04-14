const mongoose = require('mongoose');
const User = require('../models/User')
const mongoConnUrl = process.env.MONGO_CONN_URL

module.exports = {
  create: (username, password) => {
    return new Promise((resolve, reject) => {
      mongoose.connect(mongoConnUrl, (err) => {
        if (err) {
          console.log('error connecting to mongo (500)');
          reject({
            status: 500,
            description: 'Error connecting to mongo',
            user: null
          });
        }

        const user = new User({ username, password});
        user.save((err, user) => {
          if (!err && user) {
            resolve({
              status: 200,
              description: 'User successfully created!',
              user: user
            })
          } else {
            reject({
              status: 400,
              description: err.errmsg || 'Error creating user',
              user: null
            })
          }
        })
      })
    })
  }
}