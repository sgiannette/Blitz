const User = require("./User.js");
const Post = require('./Post.js');
const Comment = require('./Comment.js');

User.hasMany(Post);

Post.belongsTo(User);

Comment.belongsTo(User);

Comment.belongsTo(Post);

Post.hasMany(Comment);

User.hasMany(Comment);

module.exports = { User, Post, Comment };