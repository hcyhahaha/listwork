'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async goods() {
    // 连接数据库
    // 给前端发数据
    this.ctx.body = await this.service.home.goods();
  }
}

module.exports = HomeController;
