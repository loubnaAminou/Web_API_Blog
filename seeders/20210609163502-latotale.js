'use strict';

const faker = require('faker');
const {User} = require('../models');
const {Article} = require('../models');
const {Tag} = require('../models');
const {Comment} = require('../models/comment');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*   Create 20 users   */
    const sizeUsers = 20;
    var users = [sizeUsers]; 
    var year = 2000;
    var roles = ["admin","author","guest"];
    for(var i = 0; i<sizeUsers; i++){
      const name = faker.name.findName(); // create username & email with the same name
      users.push({
        username : faker.internet.userName(name),
        email : faker.internet.email(name),
        password : faker.internet.password(),
        role : roles[Math.floor(Math.random() * 3)], // get a random number between 0, 1 & 2 
        createdAt : new Date(year,1,1),
        updatedAt : new Date()
      })
      year++;
    }
    // await queryInterface.bulkInsert('Users', users, {});

    /*   Create 10 tags   */
    const sizeTags=10;
    var tags= [sizeTags];
    for(var i = 0; i<sizeTags; i++){
        tags.push({
          name : faker.random.words(3),
          createdAt : new Date(),
          updatedAt : new Date()
        })
    }
    // await queryInterface.bulkInsert('Tags', tags, {});

    /*   Create articles by users   */
    var articles = [];
    const usersID = await User.findAll({
      attributes: ['id'] 
    })
    
      for(var i=0;i<sizeUsers;i++){
      var interval = Math.floor(Math.random() * 9)+2; //  2<interval<10 articles created by user N° i
      for(var j=0;j<interval;j++){
        articles.push({
        title : faker.random.words(2), 
        content : faker.random.words(100),
        published : Math.floor(Math.random() * 2),
        createdAt : new Date(),
        updatedAt : new Date(),
        UserId : usersID[i].get({plain: true}).id
      })
      }
    }
    // await queryInterface.bulkInsert('Articles', articles, {});

    /*   Create tags of each article   */
    var articleTags = [];
    const TagsID = await Tag.findAll({
      attributes: ['id'] 
    })
    // TagsID.forEach(tag => {
    //   console.log(tag.get({plain: true}).id)
    // });
    
    const articlesID = await Article.findAll({
      attributes: ['id'] 
    })
    articlesID.forEach(article => {
      for(var i=0;i<Math.floor(Math.random()*5)+2;i++){
        articleTags.push({
          createdAt : new Date(),
          updatedAt : new Date(),
          ArticleId: article.get({plain: true}).id,
          TagId: TagsID[i].get({plain: true}).id
        })
      }
    });
    // await queryInterface.bulkInsert('ArticleTags', articleTags, {});

    /*   Create comments of articles   */
    var comments = [];
    articlesID.forEach(article => {
      for(var i=0;i<Math.floor(Math.random()*9)+2;i++){
        comments.push({
          content : faker.random.words(10),
          createdAt : new Date(),
          updatedAt : new Date(),
          ArticleId: article.get({plain: true}).id
        })
      }
    });
    await queryInterface.bulkInsert('Comments', comments, {});
  },
  down: async (queryInterface, Sequelize) => {}
};
