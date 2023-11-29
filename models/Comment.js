const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
      body: DataTypes.STRING,
      reaction: DataTypes.STRING,
    },
    {
      sequelize,
    }
  );

module.exports = Comment;
