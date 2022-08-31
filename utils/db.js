const { Sequelize, DataTypes, Model } = require("sequelize");
// const sequelize = new Sequelize('sqlite::memory:') // Sqlite 示例
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "db/sqlite.db",
});

/**
 * 数据库初始化
 */
async function init() {
  /**
   * 应用TOKEN 模型
   */
  const AppToken = sequelize.define("app_token", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false, // 是否允许为空
      autoIncrement: true,
      primaryKey: true, // 是否主键
    },
    app_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expire_date: {
      type: DataTypes.STRING
    },
  });
  await sequelize.sync({force:true});
  console.log('数据库结构初始成功');
}
module.exports = {
    init
};
