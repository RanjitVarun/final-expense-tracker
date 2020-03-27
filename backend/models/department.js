

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('department', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dname: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'department'
  });
};
