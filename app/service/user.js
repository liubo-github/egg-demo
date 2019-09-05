const Service = require('egg').Service;

class UserService extends Service {
    async find(uid) {
        const user = await this.app.mysql.query('select * from user where id = ?', uid);
        return user;
    }
}

module.exports = UserService;