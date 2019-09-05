'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async getUserInfo(){
    const { ctx } = this;
    let userInfo = await ctx.service.user.find(1);
    ctx.body = userInfo
  }
}

module.exports = HomeController;
