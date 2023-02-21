// MySQL - required -> mysql -> npm i mysql
// class DBHandler {
//   #DB = "nomsnbits";
//   #DB_USER = "root";
//   #DB_PASSWD = "try_h4ck_me_b1tch";
//   #DB_URL = "127.0.0.1";
//   #DB_PORT = null;

//   #MainHandler = null;

//   constructor() {
//     this.handler = require("mysql");
//   }

//   #CreateConnection() {
//     let handler = this.handler.createConnection({
//       host: this.#DB_URL,
//       user: this.#DB_USER,
//       password: this.#DB_PASSWD,
//       database: this.#DB,
//     });

//     this.#MainHandler = handler;
//   }

//   #DBConnect() {
//     let handler = this.#MainHandler;
//     handler.connect((error) => {
//       if (error) throw error.message;
//     });
//     console.log("Connected");
//   }

//   GetMainHandler() {
//     this.#CreateConnection();
//     this.#DBConnect();
//     return this.#MainHandler;
//   }
// }

// Instantiation
// let handler = new DBHandler();
// module.exports = handler.GetMainHandler();

// PostgresQL
class PostgresHandler {
  #DB = "nomsnbits_kfe8";
  #DB_USER = "nomsnbits_kfe8_user";
  #DB_PASSWD = "Q9JvqUm9fQKAkRYjF22eSF5ByZgHSLnD";
  #DB_URL = "dpg-cfodhdh4rebfdao7jgog-a";
  #DB_PORT = 5432;
  #handler = require("pg").Pool;
  #ConnectionStr =
    "postgres://nomsnbits_kfe8_user:Q9JvqUm9fQKAkRYjF22eSF5ByZgHSLnD@dpg-cfodhdh4rebfdao7jgog-a.oregon-postgres.render.com/nomsnbits_kfe8";

  CreateInternalPool() {
    return new this.#handler({
      user: this.#DB_USER,
      host: this.#DB_URL,
      port: this.#DB_PORT,
      database: this.#DB,
      password: this.#DB_PASSWD,
    });
  }

  CreateExternalPool() {
    return new this.#handler({
      connectionString: this.#ConnectionStr,
      ssl: {
        rejectUnauthorized: false
      }
    });
  }
}

// Instantiation
module.exports = new PostgresHandler().CreateExternalPool();
