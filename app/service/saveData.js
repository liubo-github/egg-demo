const Service = require('egg').Service;

class SavedataService extends Service {
    async saveData(data) {
        const res = await this.app.mysql.insert('pic_data', data);
        return res;
    }
}

module.exports = SavedataService;