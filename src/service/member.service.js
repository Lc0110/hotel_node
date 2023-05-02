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
    console.log(123);
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
  async get() {
    const statement =
      "SELECT COUNT(*) as count FROM member WHERE date_sub(curdate(), interval 6 day) <= date(createAt);";
    const result = await connection.query(statement);
    return result;
  }
  async getSevenData() {
    const statement =
      "SELECT date_diffs.date_diff, IFNULL( COUNT( member.mem_id ), 0 ) AS record_count FROM ( SELECT 0 AS date_diff UNION ALL SELECT 1 AS date_diff UNION ALL SELECT 2 AS date_diff UNION ALL SELECT 3 AS date_diff UNION ALL SELECT 4 AS date_diff UNION ALL SELECT 5 AS date_diff UNION ALL SELECT 6 AS date_diff ) AS date_diffs LEFT JOIN member ON DATEDIFF( curdate(), member.createAt ) = date_diffs.date_diff AND member.createAt >= DATE_SUB( DATE( NOW()), INTERVAL 7 DAY ) GROUP BY date_diffs.date_diff;";
    const result = await connection.query(statement);
    return result;
  }
}

module.exports = new MemberServer();
