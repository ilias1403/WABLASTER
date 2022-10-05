import config from '../../../config.json';
const { DataTypes } = require('sequelize');

let mongoose = config.tokenStoreType === 'mongodb' ? require('../../db/mongodb/db') : null;
let sequelize =  config.tokenStoreType === 'mysql'?require('../../db/mysql/db'): null;
let Token = null;

if (config.tokenStoreType === 'mongodb') {
  const TokenSchema = new mongoose.Schema({
    WABrowserId: String,
    WASecretBundle: String,
    WAToken1: String,
    WAToken2: String,
    webhook: String,
    config: String,
    sessionName: String,
  });
  Token = mongoose.model('Token', TokenSchema);
}

if (config.tokenStoreType === 'mysql') {
  const TokenSchema = sequelize.define('tokens',{
    WABrowserId:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
    WASecretBundle:{
      type :DataTypes.STRING,
      allowNull : true,

    },WAToken1:{
      type :DataTypes.STRING,
      allowNull : true,

    },WAToken2:{
      type :DataTypes.STRING,
      allowNull : true,

    },webhook:{
      type :DataTypes.STRING,
      allowNull : true,

    },config:{
      type :DataTypes.STRING,
      allowNull : true,

    },sessionName:{
      type :DataTypes.STRING,
      allowNull : true,

    },
  })
  sequelize.sync();
  Token = TokenSchema;
  }

module.exports = Token;
