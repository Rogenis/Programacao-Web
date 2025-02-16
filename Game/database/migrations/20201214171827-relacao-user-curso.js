'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Users', {
      type: 'foreign key',
      fields: ['cursoId'],
      name: 'users_cursos_fk',
      references: {
        table: 'Cursos',
        field: 'id'
      },
      onDelete: 'restrict',
      onUpdate: 'restrict'
    })
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.removeConstraint(
     'Users',
     'users_cursos_fk'
   )
  }
};
