const { Article } = require('../models')
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('aminou', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
module.exports = { 
    getAllArticles() { 
      return Article.findAll() 
    },
     getArticlesOfUserId(id){
        return Article.findAll({
            where: {
               UserId : id
              }
          });
      },
      articlesGroupByUserid(){
        return Article.findAll(
          {
            attributes:[
            [sequelize.fn('COUNT', sequelize.col('id')), 'article'],
            'UserId'
          ],
          group : ['UserId']
          })
      },
     async newArticle(Article){
        return await Article.create(Article);
      },
     async updateArticle(id, newArticle){
      return await Article.update(newArticle, {
            where: {
              id: id
            }
          });
      }, 
     async deleteArticle(id){
        return await Article.destroy({
            where: {
              id: id
            }
          });
      }, 
    }
