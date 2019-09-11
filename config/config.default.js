/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1567586490982_517';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
    mysql: {
      // 单数据库信息配置
      client: {
        // host
        host: '47.111.185.131',
        // 端口号
        port: '3306',
        // 用户名
        user: 'egg_demo',
        // 密码
        password: 'root',
        // 数据库名
        database: 'egg_demo',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
    security:{
      csrf: {
        enable: false,
      },
    },
    cors:{
      origin:'*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    },
    cluster:{
        listen: {
          port: 7001,
          hostname: '127.0.0.1',
          // path: '/var/run/egg.sock',
        }
    },
    static: {
      prefix: '/public/',
      dir: ['app/public'],
      dynamic: true,
      preload: false,
      maxAge: 31536000 ,
      buffer: true,
    }
  }
};
