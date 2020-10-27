const { EggApplication } = require("egg");

'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async goods() {
    // 写MySQL语句
    const sql = `select * from tbgoods`;
    const data = await this.app.mysql.query(sql);
    return data;
  }
}

module.exports = HomeService;
