module.exports = {
    host: 'localhost',
    user: 'root',
    password: 'root@123456##',
    db: 'projectdb',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}