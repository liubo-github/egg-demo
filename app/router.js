'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/picture/getPicData', controller.picture.getPicData)
  router.post('/picture/getPicDetail', controller.picture.getPicDetail)
  router.post('/user/getUser', controller.user.getUser)
  router.post('/user/createUser', controller.user.createUser)
};
