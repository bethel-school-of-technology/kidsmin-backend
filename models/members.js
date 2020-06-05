'use strict';
module.exports = (sequelize, DataTypes) => {
  const members = sequelize.define('members', {
    idmembers: {
      type: DataTypes.STRING (5),
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    guardianNameFirst: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    guardianLastName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    guardianPhone: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    membersAge: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    }
  }, {
    timestamps: false
  });
  members.associate = function(models) {
    // associations can be defined here
  };
  return members;
};