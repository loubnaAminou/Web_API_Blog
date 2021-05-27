'use strict';
const faker = require('faker');
const {User} = require('../models/user');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const size = 20;
    var users = [size]; 
    var roles = ["admin","author","guest"];
    for(var i = 0; i<size; i++){
      const name = faker.name.findName(); // create username & email based in the same name
      users.push({
        username : faker.internet.userName(name),
        email : faker.internet.email(name),
        password : faker.internet.password(),
        role : roles[Math.floor(Math.random() * 3)], // get a random number between 0, 1 & 2 
        createdAt : new Date(),
        updatedAt : new Date()
      })
    }

    await queryInterface.bulkInsert('Users', users, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
