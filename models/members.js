'use strict';
module.exports = (sequelize, DataTypes) => {
  const members = sequelize.define('members', {
    idmembers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    guardianNameFirst: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    guardianLastName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    guardianPhone: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    membersAge: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    }
  }, {
    timestamps: false
  });
  members.associate = function(models) {
    // associations can be defined here
  };
  return members;
};