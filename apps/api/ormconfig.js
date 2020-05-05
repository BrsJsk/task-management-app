module.exports = {
    "type": "mariadb",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "noname",
    "database": "taskman",
    "synchronize": true,
    "logging": false,
    "entities": [__dirname + "/../**/*.entity.ts"],
    "migrations": ["src/migration/**/*.ts"],
    "subscribers": ["src/subscriber/**/*.ts"]
 }