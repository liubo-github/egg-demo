const Subscription = require('egg').Subscription;
const request = require('request');

class getData extends Subscription {
    // 通过 schedule 属性来设置定时任务的执行间隔等配置
    static get schedule() {
        return {
            interval: '24h', // 24h间隔
            type: 'all', // 指定所有的 worker 都需要执行
        };
    }

    async getPicData(){
        var options = {
            url: 'https://unsplash.com/napi/photos?page=1&per_page=100',
        };
        let data = []
        await new Promise((resolve, reject) => {
            request(options, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    if(typeof body === 'string') body = JSON.parse(body)
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
                                update_time: new Date(item.updated_at).getTime(),
                                create_time: new Date(item.created_at).getTime()
                            })
                        })
                    }else{
                        reject()
                    }
                    resolve()
                }else{
                    reject()
                }
            });
        })
        return Promise.resolve(data)
    }

    // subscribe 是真正定时任务执行时被运行的函数
    // async subscribe() {
    //     let data = await this.getPicData();
    //     let res = await this.ctx.service.picData.createData(data);
    //     if(res.affectedRows >= 1) console.log(11111)
    // }
}

module.exports = getData;