'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  security:{
    xframe: {
      enable: false,
    }
  },
  mysql: { 
    enable: true,
    package: 'egg-mysql',
  }
};
