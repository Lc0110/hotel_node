const connection = require("../database/database");

class classifyServer {
  async getclassifyList(Isfirst, size, offset) {
    if (Isfirst === "") {
      const statement = "SELECT * FROM classify ORDER BY sort ;";
      const result = await connection.query(statement);
      return result;
    }
    const statement = "SELECT * FROM classify ORDER BY sort LIMIT ? OFFSET ? ;";
    const result = await connection.query(statement, [size, offset]);
    return result;
  }
  async getclassifyCount() {
    const statement = "	SELECT COUNT(*) count FROM classify; ";
    const result = await connection.query(statement);
    return result;
  }
  async delete(id) {
    const statement = "DELETE FROM classify WHERE cfy_id = ?;";
    const result = await connection.execute(statement, [id]);
    return result;
  }
  async create(name, sort) {
    const statement = "INSERT INTO classify (name,sort) VALUES (?,?);";
    const result = await connection.execute(statement, [name, sort]);
    return result;
  }
  async edit(cfy_id, name, sort) {
    const statement = "UPDATE classify SET name =? ,sort =? WHERE cfy_id =?;";
    const result = await connection.execute(statement, [name, sort, cfy_id]);
    return result;
  }
  async search(sort) {
    const statement = "SELECT * FROM classify WHERE sort = ?;";
    const result = await connection.execute(statement, [sort]);
    return result;
  }
}

module.exports = new classifyServer();
