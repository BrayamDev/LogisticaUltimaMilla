require('dotenv').config()

const config = {
    port: process.env.PORT || 3200,
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || '',
        database: process.env.MYSQL_DB 
    }
}


module.exports = config