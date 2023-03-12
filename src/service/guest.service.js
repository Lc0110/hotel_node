const connection = require("../database/database");

class guestServer {
  async getguestList(name, size, offset) {
    console.log(name);
    const Searchname = "%" + name + "%";
    let statement = "";
    if (name !== "") {
      statement =
        "	select guest.* ,classify.name as c_name from guest Left JOIN classify ON (guest.c_id = classify.cfy_id) WHERE guest.name like ? LIMIT ? OFFSET ?;";
      const result = await connection.query(statement, [
        Searchname,
        size,
        offset,
      ]);
      return result;
    } else {
      statement =
        "	select guest.* ,classify.name as c_name from guest Left JOIN classify ON (guest.c_id = classify.cfy_id) LIMIT ? OFFSET ?;";
      const result = await connection.query(statement, [size, offset]);
      return result;
    }
  }
  async getguestCount() {
    const statement = "	SELECT COUNT(*) count FROM guest; ";
    const result = await connection.query(statement);
    return result;
  }
  async delete(id) {
    const statement = "DELETE FROM guest WHERE gst_id = ?;";
    const result = await connection.execute(statement, [id]);
    return result;
  }
  async create(
    c_id,
    imgurl,
    name,
    price,
    area,
    live,
    description,
    is_wifi,
    is_tj,
    is_kt,
    is_window
  ) {
    const statement =
      "INSERT INTO guest (c_id,imgurl,name,price,area,live,description,is_wifi,is_tj,is_kt,is_window) VALUES (?,?,?,?,?,?,?,?,?,?,?);";
    const result = await connection.execute(statement, [
      c_id,
      imgurl,
      name,
      price,
      area,
      live,
      description,
      is_wifi,
      is_tj,
      is_kt,
      is_window,
    ]);
    return result;
  }
  async edit(
    gst_id,
    c_id,
    imgurl,
    name,
    price,
    area,
    live,
    description,
    is_wifi,
    is_tj,
    is_kt,
    is_window
  ) {
    is_tj = is_tj === "是" ? 1 : 0;
    is_kt = is_kt === "是" ? 1 : 0;
    is_wifi = is_wifi === "是" ? 1 : 0;
    is_window = is_window === "是" ? 1 : 0;
    const statement =
      "UPDATE guest SET c_id =?,imgurl=?,name =? ,price =?,area=?,live=?,description=?,is_wifi=?,is_tj=?,is_kt=?,is_window=? WHERE gst_id =?;";
    const result = await connection.execute(statement, [
      c_id,
      imgurl,
      name,
      price,
      area,
      live,
      description,
      is_wifi,
      is_tj,
      is_kt,
      is_window,
      gst_id,
    ]);
    return result;
  }
  async search(gst_id) {
    const statement = "SELECT * FROM guest WHERE gst_id = ?;";
    const result = await connection.execute(statement, [gst_id]);
    return result;
  }
}

module.exports = new guestServer();
