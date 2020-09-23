'use strict';

const Controller = require('egg').Controller;
class ImageController extends Controller {
    constructor(...args){
        super(...args)
        this.cdnHost = 'http://qiniu.liubo.ink/'
    }

    async getImageList(){
        let body = this.ctx.request.body;
        let defaultParams = {
            page: 1,
            limit: 10,
        }
        let params = Object.assign(defaultParams, body);
        let res = await this.ctx.service.image.queryList(params)
        res.data.map(item => {
            item.url = this.cdnHost + item.url;
        })
        this.ctx.body = {
            code: 1, 
            data: res,
            message: 'success'
        };
        
    }

    async saveImage(){
        let { body } = this.ctx.request;
        let data = {
            url: '',
        };
        if('url' in body && body.url){
            data['url'] = body.url
            data['create_time'] = Date.now();
            let res = await this.ctx.service.image.insert(data)
            if(res.insertId){
                this.ctx.body = {
                    code: 1,
                    data: {
                        url: this.cdnHost + body.url
                    },
                    message: 'success'
                }
            }else{
                this.ctx.body = {
                    code: 0,
                    data: JSON.stringify(res),
                    message: 'error'
                }
            }
        }else{
            this.ctx.body = {
                code: 0,
                data: {},
                message: '请上传url'
            }
        }
    }

    async getImageDetail(){
        let { body } = this.ctx.request;
        if('id' in body && body.id){
            let res = await this.ctx.service.image.queryItem(body.id);
            if(res){
                res.url = this.cdnHost + res.url;
                this.ctx.body = {
                    code: 1,
                    data: res,
                    message: 'success'
                }
            }else{
                this.ctx.body = {
                    code: 0,
                    message: '数据不存在！'
                }
            }
        }else{
            this.ctx.body = {
                code: 0,
                message: 'id不能为空！'
            }
        }
    }
}

module.exports = ImageController;