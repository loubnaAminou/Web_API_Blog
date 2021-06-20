const router = require('express').Router(); 
const TagsRepo = require('../repositories/tags') 

/* GET Tags listing. */ 
router.get('/', async function(req, res, next) { 
  res.send(await TagsRepo.getAllTags()) 
});

router.get('/:id',async function(req, res, next) { 
  res.send(await TagsRepo.getTag(req.params.id) ) 
});

  module.exports = router;
