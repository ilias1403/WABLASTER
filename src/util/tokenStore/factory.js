import config from '../../config.json';
import FileTokenStore from './fileTokenStory';
import MongodbTokenStore from './mongodbTokenStory';
import RedisTokenStore from './redisTokenStory';
import FirebaseTokenStore from './firebaseTokenStory';
import MySqlTokenStore from './mysqlTokenStore';

var Factory = function () {
  this.createTokenStory = function (client) {
    var myTokenStore;
    const type = config.tokenStoreType;

    if (type === 'mongodb') {
      myTokenStore = new MongodbTokenStore(client);
    } else if (type === 'redis') {
      myTokenStore = new RedisTokenStore(client);
    } else if (type === 'firebase') {
      myTokenStore = new FirebaseTokenStore();
    } else if (type === 'mysql') {
      myTokenStore = new MySqlTokenStore(client); 
    }else {
      myTokenStore = new FileTokenStore(client);
    }

    return myTokenStore.tokenStore;
  };
};

module.exports = Factory;
