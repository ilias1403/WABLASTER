const config = require('../../../config.json');
// console.log(config.tokenStoreType)
if(config.tokenStoreType == "mysql"){
  const mysqlConfig = {
    username: config.db.mysql.username,
    password: config.db.mysql.password,
    database: config.db.mysql.database,
    host: config.db.mysql.host,
    dialect: config.db.mysql.dialect 
}
  var Sequelize = require("sequelize");
  var sequelize = new Sequelize(mysqlConfig);

}

module.exports = sequelize; 