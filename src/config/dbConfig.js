module.exports = {
    HOST:  'localhost',
    USER:  'root',
    PASSWORD: '!sioma@2004',
    DB:  'ElectionDB',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    }
}