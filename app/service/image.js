const Service = require('egg').Service;

class ImageService extends Service {
    async queryList(query) {
        const data = await this.app.mysql.select('images', { // 搜索 post 表
            limit: query.limit, // 返回数据量
            offset: (query.page - 1) * 10, // 数据偏移量
            orders: [['id','desc']],
            where: { delete_time: null }
        });
        let total = await this.app.mysql.query('select COUNT(*) as total from images');
        return {
            data,
            page: query.page,
            last_page: Math.ceil(total[0].total / query.limit),
            total: total[0].total,
        }
    }

    async insert(data){
        const res = await this.app.mysql.insert('images', data);
        return res;
    }

    async queryItem(id){
        const res = await this.app.mysql.select('images', { 
            where: { id: id, delete_time: null }
        });
        if(Array.isArray(res) && res.length > 0){
            return res[0]
        }else{
            return null
        }
    }
}

module.exports = ImageService;