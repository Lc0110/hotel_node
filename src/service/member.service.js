const connection = require("../database/database");

class MemberServer {
  async getMemberList(nickname, size, offset) {
    const Searchnickname = "%" + nickname + "%";
    let statement = "";
    if (nickname !== "") {
      statement =
        "	SELECT * FROM member WHERE nickname like ? LIMIT ? OFFSET ? ;";
      const result = await connection.query(statement, [
        Searchnickname,
        size,
        offset,
      ]);
      return result;
    } else {
      statement = "	SELECT * FROM member LIMIT ? OFFSET ? ;";
      const result = await connection.query(statement, [size, offset]);
      return result;
    }
  }
  async getMemberCount() {
    const statement = "	SELECT COUNT(*) count FROM member; ";
    const result = await connection.query(statement);
    return result;
  }
  async searchMember(nickname) {
    const statement = "SELECT * FROM member WHERE nickname = ?;";
    const result = await connection.execute(statement, [nickname]);
    return result;
  }
  async deletemember(id) {
    const statement = "DELETE FROM member WHERE mem_id = ?;";
    const result = await connection.execute(statement, [id]);
    return result;
  }
  async edit(mem_id, nickname, realname, phonenumber, gender) {
    const statement =
      "UPDATE member SET nickname =? ,realname =?,phonenumber=?,gender=? WHERE mem_id =?;";
    const result = await connection.execute(statement, [
      nickname,
      realname,
      phonenumber,
      gender,
      mem_id,
    ]);
    return result;
  }
  async createmember(avatarUrl, nickname, password, realname, phonenumber) {
    if (avatarUrl !== "") {
      const statement =
        "INSERT INTO member (avatarurl,nickname,password,realname,phonenumber) VALUES (?,?,?,?,?);";
      const result = await connection.execute(statement, [
        avatarUrl,
        nickname,
        password,
        realname,
        phonenumber,
      ]);
      return result;
    } else {
      const statement =
        "INSERT INTO member (nickname,password,realname,phonenumber) VALUES (?,?,?,?);";
      const result = await connection.execute(statement, [
        nickname,
        password,
        realname,
        phonenumber,
      ]);
      return result;
    }
  }
  async login(nickname, password) {
    const statement = "DELETE FROM member WHERE mem_id = ?;";
    const result = await connection.execute(statement, [id]);
    return result;
  }
}

module.exports = new MemberServer();
