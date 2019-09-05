'use strict';

const Controller = require('egg').Controller;
const request = require('request');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async getUserInfo(){
    const { ctx } = this;
    let userInfo = await ctx.service.user.find(1);
    ctx.body = userInfo;
  }
  async getData(){
    let { ctx } = this;

    var options = {
        url: 'https://unsplash.com/napi/photos?page=1&per_page=100',
    };
    let res = await new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          let data = [];
          if(typeof body === 'string') body = JSON.parse(body)
          try{
            if(Array.isArray(body)){
              body.forEach(item => {
                data.push({
                  unique_key: item.id,
                  likes: parseInt(item.likes),
                  color: item.color,
                  description: item.description,
                  alt_description: item.alt_description,
                  small_url: item.urls.small,
                  full_url: item.urls.full,
                  thumb_url: item.urls.thumb,
                  update_time: new Date('2019-09-05T03:26:12-04:00').getTime(item.updated_at),
                  create_time: new Date('2019-09-05T03:26:12-04:00').getTime(item.created_at)
                })
              })
            }else{
              reject()
            }
          }catch{
            reject()
          }
          ctx.body = data;
          resolve()
        }else{
          reject()
        }
      });
    })
  }
}

module.exports = HomeController;
