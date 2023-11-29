const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
  {
    body: DataTypes.STRING,
    game: DataTypes.STRING,
    genre: DataTypes.STRING, 
    rating: DataTypes.INTEGER, 
    video_embed: DataTypes.STRING
  },
  {
    sequelize,
  }
);

module.exports = Post;
