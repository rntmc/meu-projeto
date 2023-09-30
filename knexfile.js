const path = require("path");

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },
    pool:{
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb) //PRAGMA habilita a delecao em cascata das tags
    },
    migrations: {
      directory: path.resolve(__dirname, "src","database","knex","migrations")
    },
    useNullAsDefault: true
  }
};
