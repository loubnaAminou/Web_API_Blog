const router = require('express').Router(); 
const CommentsRepo = require('../repositories/comments') 

/* GET Comments listing. */ 
router.get('/', async function(req, res, next) { 
  res.send(await CommentsRepo.getAllComments()) 
});


router.get('/groupByArticleId', async function(req, res, next) { 
  res.send(await CommentsRepo.commentsGroupByArticleid()) 
});


router.get('/:id',async function(req, res, next) { 
  res.send(await CommentsRepo.getCommentsOfArticle(req.params.id) ) 
});

  module.exports = router;
