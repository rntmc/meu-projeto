const sqlite3 = require("sqlite3"); //versao
const sqlite = require("sqlite"); //o que sera usado para conectar
const path = require("path")

async function sqliteConnection(){
  const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database
  });

  return database;  
}

module.exports =sqliteConnection;