'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/picture/getPicData', controller.picture.getPicData)
  router.post('/picture/getPicDetail', controller.picture.getPicDetail)
  
  router.get('/getQiNiuUploadToken', controller.home.getQiNiuUploadToken)
  router.post('/images/saveImage', controller.image.saveImage)
  router.post('/images/getImageList', controller.image.getImageList)
  router.post('/images/getImageDetail', controller.image.getImageDetail)
};
