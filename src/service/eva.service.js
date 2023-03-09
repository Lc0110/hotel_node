const connection = require("../database/database");

class EvaServer {
  async getEvaList(content, size, offset) {
    const Searchcontent = "%" + content + "%";
    let statement = "";
    if (content !== "") {
      statement =
        "	select eva.* ,member.nickname from eva Left JOIN member ON (eva.m_id = member.mem_id) WHERE content like ? LIMIT ? OFFSET ?;";
      const result = await connection.query(statement, [
        Searchcontent,
        size,
        offset,
      ]);
      return result;
    } else {
      statement =
        "	select eva.* ,member.nickname from eva Left JOIN member ON eva.m_id = member.mem_id LIMIT ? OFFSET ?;";

      const result = await connection.query(statement, [size, offset]);
      return result;
    }
  }
  async getEvaCount() {
    const statement = "	SELECT COUNT(*) count FROM eva; ";
    const result = await connection.query(statement);
    return result;
  }
  async deleteeva(id) {
    const statement = "DELETE FROM eva WHERE eva_id = ?;";
    const result = await connection.execute(statement, [id]);
    return result;
  }
  async createeva(m_id, g_id, content) {
    console.log(m_id, g_id, content);
    const statement = "INSERT INTO eva (m_id,g_id,content) VALUES (?,?,?);";
    const result = await connection.execute(statement, [m_id, g_id, content]);
    return result;
  }
  async search(mem_id) {
    const statement = "SELECT * FROM eva WHERE m_id = ?;";
    const result = await connection.execute(statement, [mem_id]);
    return result;
  }
}

module.exports = new EvaServer();
