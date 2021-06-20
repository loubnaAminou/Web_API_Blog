const { User } = require('../models')

module.exports = { 
    getAllUsers() { 
      return User.findAll() 
    },
     getUsers(page = 1){
       const limit = 5;
        offset = limit * (page-1);
        return User.findAll({offset : offset, limit : limit}) ;
        /*
         offset : debut
         limit : nombre des occurences à récupérer
         */
      },
     getUserByRole(Role){
        return User.findAll({
            where: {
                role : Role
              }
          });
      },
     getUser(id){
        return User.findOne({
            where: {
               id : id
              }
          });
      }, 
     getUserByEmail(email){
      return User.findOne({
            where: {
                email : email
              }
          });
      },
     async newUser(user){
        return await User.create(user);
      },
     async updateUser(id, newUser){
      return await User.update(newUser, {
            where: {
              id: id
            }
          });
      }, 
     async deleteUser(id){
        return await User.destroy({
            where: {
              id: id
            }
          });
      }, 
     // D'autres méthodes jugées utiles
     }
