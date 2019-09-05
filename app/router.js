'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getUserInfo', controller.home.getUserInfo);
  // router.get('/getData', controller.home.getData);
};
