const Controller = require('egg').Controller;

class PictureController extends Controller{
    async getPicData(){
        let body = this.ctx.request.body;
        let defaultParams = {
            page: 1,
            limit: 10,
        }
        let params = Object.assign(defaultParams, body);
        let res = await this.ctx.service.picData.getData(params)
        this.ctx.body = {
            code: 1, 
            data: res,
            message: 'success'
        };
    }
    
    async getPicDetail(){
        let body = this.ctx.request.body;
        if(Object.getOwnPropertyNames(body).length === 0 || !body.id) this.ctx.body = {
            code: 0,
            msg: '参数不合法！'
        }
        let res = await this.ctx.service.picData.getDetail(body);
        this.ctx.body = {
            code: 1,
            data: res,
            message: 'success'
        };
    }
}

module.exports = PictureController;