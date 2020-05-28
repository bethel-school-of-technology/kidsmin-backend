/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('members', {
    idmembers: {
      type: DataTypes.INTEGER(11),
      allowNull: true
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
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    membersAge: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'members'
  });
};
