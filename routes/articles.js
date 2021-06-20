const router = require('express').Router(); 
const ArticlesRepo = require('../repositories/articles') 

/* GET Articles listing. */ 
router.get('/', async function(req, res, next) { 
  res.send(await ArticlesRepo.getAllArticles()) 
});

router.get('/groupByUserId', async function(req, res, next) { 
  res.send(await ArticlesRepo.articlesGroupByUserid()) 
});


router.get('/articlesByUser/:id',async function(req, res, next) { 
  res.send(await ArticlesRepo.getArticlesOfUserId(req.params.id) ) 
});

  module.exports = router;
