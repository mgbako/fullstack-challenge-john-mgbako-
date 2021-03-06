const { Model, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

class User extends Model {

}

User.init({
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'user'
});

module.exports = User;