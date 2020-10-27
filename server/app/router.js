'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list', controller.list.list);
  router.get('/add', controller.list.add);// 添加
  router.get('/updatefalse', controller.list.updatefalse);// 是否完成列表---false
  router.get('/updatetrue', controller.list.updatetrue);// 是否完成列表---true
  router.get('/listupdate', controller.list.listupdate);// 更新更改后的列表内容
  router.get('/del', controller.list.del);// 删除
};
