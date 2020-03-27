

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_role_relation', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'user_details',
        key: 'id'
      }
    },
    role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'role',
        key: 'id'
      }
    }
  }, {
    tableName: 'user_role_relation'
  });
};
