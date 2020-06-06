'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    idusers: {
      type: DataTypes.INTEGER (5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },  
    password: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: 0
    }, 
 }, {
    timestamps: false
});

  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};