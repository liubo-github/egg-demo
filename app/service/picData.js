const Service = require('egg').Service;

class SavedataService extends Service {
    async createData(data) {
        const res = await this.app.mysql.insert('pic_data', data);
        return res;
    }
    
    async getData(query){
        const data = await this.app.mysql.select('pic_data', { // 搜索 post 表
            limit: 10, // 返回数据量
            offset: (query.page - 1) * 10, // 数据偏移量
        });
        let total = await this.app.mysql.query('select COUNT(*) as total from pic_data')
        return {
            data,
            total:total[0].total,
        }
    }

    async updateData(data){
        return res;
    }
    
    async getDetail(query){
        const res = await this.app.mysql.get('pic_data', { id: query.id});
        return res;
    }
}

module.exports = SavedataService;