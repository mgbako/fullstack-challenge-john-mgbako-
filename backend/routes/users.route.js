const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const router = express.Router();


router.get('/', async (req, res, next) => {
  const users = await User.findAll();
  console.log(users);
 
  
  return res.status(200).json({
    message: 'Users',
    data: users,
    status: true
  });
  
})

router.get('/:email', async (req, res, next) => {

  const email = req.params.email;
  console.log(email);
  if (!email) {
    return res.status(200).json({
      message: 'User not found',
      data: users,
      status: true
    });
  }
  const user = await User.findOne({email: email});
 
  
  return res.status(200).json({
    message: 'User',
    data: user,
    status: true
  });
  
})

router.post('/signup', (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    const user = {
      email: req.body.email,
      password: hash
    }
    User.create(user).then(() => {
      res.status(200).json({
        message: 'User Created',
        data: {
          email: user.email
        },
        status: true
      });
    })
  })
});

router.post('/login', async (req, res, next) => {
  user = await User.findOne({ email: req.body.email });
  //console.log(user);
 
  if (!user) {
    return res.status(200).json({
      message: 'User not found',
      data: null,
      status: false
    })
  }
  auth = await bcrypt.compare(req.body.password, user.password);
  if (!auth) {
    return res.status(200).json({
      message: 'Not a valid User email and password',
      data: null,
      status: false
    })
  }
  const token = jwt.sign({email: user.email, userId: user.id}, 'adfsfasfdasfdsf', {expiresIn: "1h"})
  return res.status(200).json({
      message: 'Valid User',
    data: {
      token: token,
      email: user.email,
      },
      status: true
    })
})


module.exports = router;