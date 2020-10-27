'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {
    async list() {
        const { ctx } = this;
        let sql = `select * from listwork`
        ctx.body = await this.app.mysql.query(sql);
    }

    // 添加
    async add() {
        let sql = `insert into listwork (text,time) values ("${this.ctx.request.query.text}","${this.ctx.request.query.time}")`
        this.ctx.body = await this.app.mysql.query(sql);
    }

    // 更新更改后的列表内容
    async listupdate() {
        let sql = `UPDATE listwork SET text="${this.ctx.request.query.text}",time="${this.ctx.request.query.time}" WHERE id=${this.ctx.request.query.id};`
        this.ctx.body = await this.app.mysql.query(sql);
    }

    // 是否完成清单内容---false
    async updatefalse() {
        let sql = `UPDATE listwork SET isFinish=1 WHERE id=${this.ctx.request.query.id};`
        this.ctx.body = await this.app.mysql.query(sql);
    }

    // 是否完成清单内容---true
    async updatetrue() {
        let sql = `UPDATE listwork SET isFinish=0 WHERE id=${this.ctx.request.query.id};`
        this.ctx.body = await this.app.mysql.query(sql);
    }

    // 删除del
    async del() {
        let sql = `DELETE FROM listwork WHERE id=${this.ctx.request.query.id}`
        this.ctx.body = await this.app.mysql.query(sql);
    }
}

module.exports = ListController;
