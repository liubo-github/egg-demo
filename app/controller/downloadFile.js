'use strict';

var request = require('request');
var fs = require('fs')

const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index() {
    let url = this.ctx.query.url;
    let key = this.ctx.query.key;
    if(!url || !key){
        this.ctx.body = {
            code: 0
        }
    }else{
        let options = {
            url,
        };
        fs.exists('./app/public/imgs/' + key + '.jpg', async exists => {
            if(!exists){
                await new Promise(resolve => {
                    request(options, (err, response, body) => {
                        if(!err && response.statusCode === 200){
                            resolve()
                        }
                    }).pipe(fs.createWriteStream('./app/public/imgs/' + key + '.jpg'));
                })
            }
        });
        this.ctx.body = {
            code: 1,
            url: `${this.app.config.env !== 'local' ? 'https://egg.liubo.ink/app/' : 'http://127.0.0.1:7001/'}public/imgs/${key}.jpg`
        }
    }
  }
}

module.exports = IndexController;





