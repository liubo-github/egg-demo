const Controller = require('egg').Controller;

class UserController extends Controller{
    async createUser(){
        let res = await this.ctx.service.user.insert(data);
        if(res.affectedRows >= 1){
            this.ctx.body = {
                code: 1
            }
        }else{
            this.ctx.body = {
                code: 0
            }
        }
    }

    async getUser(){
        let userInfo = await this.ctx.service.user.find(1);
        this.ctx.body = userInfo;
    }

    async updateUser(){

    }

    async deleteUser(){

    }
}

module.exports = UserController;