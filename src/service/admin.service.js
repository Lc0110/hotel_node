const connection = require("../database/database");

class AdminServer {
  async getadminList(username, size, offset) {
    const Searchusername = "%" + username + "%";
    let statement = "";
    if (username !== "") {
      statement =
        "	SELECT * FROM admin WHERE username like ? LIMIT ? OFFSET ? ;";
      const result = await connection.query(statement, [
        Searchusername,
        size,
        offset,
      ]);
      return result;
    } else {
      statement = "	SELECT * FROM admin LIMIT ? OFFSET ? ;";
      const result = await connection.query(statement, [size, offset]);
      return result;
    }
  }
  async create(username, phonenumber, status, password) {
    const statement = `INSERT INTO admin  (username,phonenumber,status,password) VALUES (?,?,?,?);`;
    const [result] = await connection.execute(statement, [
      username,
      phonenumber,
      status,
      password,
    ]);
    return result;
  }
  async getadminCount() {
    const statement = "	SELECT COUNT(*) count FROM admin; ";
    const result = await connection.query(statement);
    return result;
  }
  async findAdminByName(username) {
    const statement = "SELECT * FROM admin WHERE username = ?;";
    const [values] = await connection.execute(statement, [username]);
    return values;
  }
  async delete(id) {
    console.log(id);
    const statement = "DELETE FROM admin WHERE adm_id = ?;";
    const result = await connection.execute(statement, [id]);
    return result;
  }
  async edit(adm_id, username, phonenumber, status, password) {
    console.log(adm_id, username, phonenumber, status, password);
    const statement =
      "UPDATE admin SET username =? ,phonenumber =?,status=?,password=? WHERE adm_id =?;";
    const result = await connection.execute(statement, [
      username,
      phonenumber,
      status,
      password,
      adm_id,
    ]);
    return result;
  }
  async findUsermenu() {
    const statement = "	SELECT * FROM usermenu;";
    const result = await connection.query(statement);
    return result;
  }
}

module.exports = new AdminServer();
