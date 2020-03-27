

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rname: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'role'
  });
};
