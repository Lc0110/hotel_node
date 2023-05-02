const connection = require("../database/database");

class AdvertServer {
  async getAdvertList(size, offset) {
    const statement = "SELECT * FROM advert ORDER BY sort LIMIT ? OFFSET ? ;";
    const result = await connection.query(statement, [size, offset]);
    return result;
  }
  async getAdvertCount() {
    const statement = "	SELECT COUNT(*) count FROM advert; ";
    const result = await connection.query(statement);
    return result;
  }
  async delete(id) {
    const statement = "DELETE FROM advert WHERE adv_id = ?;";
    const result = await connection.execute(statement, [id]);
    return result;
  }
  async create(imgurl, sort, status) {
    const statement = "INSERT INTO advert (imgurl,sort,status) VALUES (?,?,?);";
    const result = await connection.execute(statement, [imgurl, sort, status]);
    return result;
  }
  async edit(adv_id, imgurl, sort, status) {
    if (status === "启用" || status === "禁用") {
      status = status === "启用" ? 1 : 0;
    }
    const statement =
      "UPDATE advert SET imgurl =? ,sort =?,status=? WHERE adv_id =?;";
    const result = await connection.execute(statement, [
      imgurl,
      sort,
      status,
      adv_id,
    ]);
    return result;
  }
  async search(sort) {
    const statement = "SELECT * FROM advert WHERE sort = ?;";
    const result = await connection.execute(statement, [sort]);
    return result;
  }
}

module.exports = new AdvertServer();
