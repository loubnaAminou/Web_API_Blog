const { Comment } = require('../models')
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('aminou', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = { 
    getAllComments() { 
      return Comment.findAll() 
    },
     getCommentsOfArticle(id){
        return Comment.findAll({
            where: {
               ArticleId : id
              }
          });
      },
      commentsGroupByArticleid(){
        return Comment.findAll(
          {
            attributes:[
            [sequelize.fn('COUNT', sequelize.col('id')), 'comment'],
            'ArticleId'
          ],
          group : ['ArticleId']
          })
      },
     async newComment(Comment){
        return await Comment.create(Comment);
      },
     async updateComment(id, newComment){
      return await Comment.update(newComment, {
            where: {
              id: id
            }
          });
      }, 
     async deleteComment(id){
        return await Comment.destroy({
            where: {
              id: id
            }
          });
      }, 

    }
