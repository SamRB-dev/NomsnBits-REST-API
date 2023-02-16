class DBHandler {
  #DB = "nomsnbits";
  #DB_USER = "root";
  #DB_PASSWD = "try_h4ck_me_b1tch";
  #DB_URL = "127.0.0.1";

  #MainHandler = null;

  constructor() {
    this.handler = require("mysql");
  }

  #CreateConnection() {
    let handler = this.handler.createConnection({
      host: this.#DB_URL,
      user: this.#DB_USER,
      password: this.#DB_PASSWD,
      database: this.#DB,
    });

    this.#MainHandler = handler;
  }

  #DBConnect() {
    let handler = this.#MainHandler;
    handler.connect((error) => {
      if (error) throw error.message;
    });
    console.log("Connected");
  }

  GetMainHandler() {
    this.#CreateConnection();
    this.#DBConnect();
    return this.#MainHandler;
  }
}

// Instantiation
let handler = new DBHandler();
module.exports = handler.GetMainHandler();
