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
    cluster:{
        listen: {
          port: 7001,
          hostname: '127.0.0.1',
          // path: '/var/run/egg.sock',
        }
    },
    static:{
      // 静态化访问前缀,如：`http://127.0.0.1:7001/static/images/logo.png`
      prefix: '/public', 
      // dir: path.join(appInfo.baseDir, 'app/public'), 
      dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
      preload: false,
      maxAge: 31536000, // in prod env, 0 in other envs
      buffer: true, // in prod env, false in other envs
    }
  }
};
