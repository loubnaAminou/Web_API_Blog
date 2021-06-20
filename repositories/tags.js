const { Tag } = require('../models')

module.exports = { 
    getAllTags() { 
      return Tag.findAll() 
    }, 
     getTag(id){
        return Tag.findOne({
            where: {
               id : id
              }
          });
      },
     async newTag(Tag){
        return await Tag.create(Tag);
      },
     async updateTag(id, newTag){
      return await Tag.update(newTag, {
            where: {
              id: id
            }
          });
      }, 
     async deleteTag(id){
        return await Tag.destroy({
            where: {
              id: id
            }
          });
      }, 
     
    }
