'use strict';

const Controller = require('egg').Controller;
let getQiNiuUploadToken = require('../utils/index').getQiNiuUploadToken;
class HomeController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        ctx.body = '你好，朋友！';
    }

    getQiNiuUploadToken() {
        this.ctx.body = getQiNiuUploadToken()
    }
}

module.exports = HomeController;