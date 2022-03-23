const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

sequelize.sync().then(() => console.log('DB is ready'))

// Routes
const PostRoute = require('./routes/posts.route');
const UserRoute = require('./routes/users.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})

app.use('/api/posts', PostRoute);
app.use('/api/users', UserRoute);

module.exports = app;