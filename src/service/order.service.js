const connection = require("../database/database");

class orderServer {
  async getorderList(ord_id, size, offset) {
    const Searchorder = "%" + ord_id + "%";
    let statement = "";
    if (ord_id !== "") {
      statement =
        "	SELECT * FROM `order` WHERE ord_id like ? LIMIT ? OFFSET ? ;";
      const result = await connection.query(statement, [
        Searchorder,
        size,
        offset,
      ]);
      return result;
    } else {
      statement = "	SELECT * FROM `order` LIMIT ? OFFSET ? ;";
      const result = await connection.query(statement, [size, offset]);
      return result;
    }
  }
  async getorderCount() {
    const statement = "	SELECT COUNT(*) count FROM `order`; ";
    const result = await connection.query(statement);
    return result;
  }
  async delete(id) {
    const statement = "DELETE FROM `order` WHERE ord_id = ?;";
    const result = await connection.execute(statement, [id]);
    return result;
  }
  async create(m_id, g_id, realname, price, in_time, out_time, status, note) {
    const statement =
      "INSERT INTO `order` (m_id, g_id,realname, price, in_time, out_time, status, note) VALUES (?,?,?,?,?,?,?,?);";
    const result = await connection.execute(statement, [
      m_id,
      g_id,
      realname,
      price,
      in_time,
      out_time,
      status,
      note,
    ]);
    return result;
  }
  async edit(gst_id, c_id, imgurl, name, price, num, area, live, description) {
    const statement =
      "UPDATE `order` SET c_id =?,imgurl=?,name =? ,price =?,num=?,area=?,live=?,description=? WHERE gst_id =?;";
    const result = await connection.execute(statement, [
      c_id,
      imgurl,
      name,
      price,
      num,
      area,
      live,
      description,
      gst_id,
    ]);
    return result;
  }
  async search(m_id) {
    const statement =
      "SELECT `order`.* ,JSON_OBJECT('name',guest.`name`,'img',guest.imgurl) AS room FROM `order` LEFT JOIN guest ON `order`.g_id = guest.gst_id WHERE m_id = ?;";
    const result = await connection.execute(statement, [m_id]);
    return result;
  }
  async searchOrdId(
    m_id,
    g_id,
    realname,
    price,
    in_time,
    out_time,
    status,
    note
  ) {
    const statement =
      "SELECT ord_id FROM `order` WHERE m_id =? and g_id=? and realname=? and price=? and in_time=? and out_time=? and status=? and note=?;";
    const result = await connection.execute(statement, [
      m_id,
      g_id,
      realname,
      price,
      in_time,
      out_time,
      status,
      note,
    ]);
    return result;
  }
  async change(status, ord_id) {
    const statement = "UPDATE `order` SET status=? WHERE ord_id =?;";
    const result = await connection.execute(statement, [status, ord_id]);
    return result;
  }
  async get() {
    const statement =
      "SELECT COUNT(*) as count FROM `order` WHERE date_sub(curdate(), interval 6 day) <= date(createAt);";
    const result = await connection.query(statement);
    return result;
  }
  async getSevenData() {
    const statement =
      "SELECT date_diffs.date_diff, IFNULL( COUNT( `order`.ord_id ), 0 ) AS record_count FROM ( SELECT 0 AS date_diff UNION ALL SELECT 1 AS date_diff UNION ALL SELECT 2 AS date_diff UNION ALL SELECT 3 AS date_diff UNION ALL SELECT 4 AS date_diff UNION ALL SELECT 5 AS date_diff UNION ALL SELECT 6 AS date_diff ) AS date_diffs LEFT JOIN `order` ON DATEDIFF( curdate(), `order`.createAt ) = date_diffs.date_diff AND `order`.createAt >= DATE_SUB( DATE( NOW()), INTERVAL 7 DAY ) GROUP BY date_diffs.date_diff;";
    const result = await connection.query(statement);
    return result;
  }
}

module.exports = new orderServer();
