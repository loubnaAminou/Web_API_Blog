const { User } = require('../models')

console.log(User);

module.exports = { 
    getAllUsers() { 
      return User.findAll() 
    },
     getUsers: function(off = 0, lim = 10){
        return User.findAll({offset : off, limit : lim}) ;
        /*
         offset : debut
         limit : nombre des occurences à récupérer
         */
      },
     getAdmins(){
        User.findAll({
            where: {
                role : 'admin'
              }
          });
      },
     getAuthors(){
        User.findAll({
            where: {
                role : 'author'
              }
          });
      }, 
     getGuests(){ 
        User.findAll({
            where: {
                role : 'guest'
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
