const connection = require("../database/database");

class roomServer {
  async getroomList(room_id, size, offset) {
    const Searchid = "%" + room_id + "%";
    let statement = "";
    if (room_id !== "") {
      statement =
        "	select room.* ,classify.name as c_name from room Left JOIN classify ON (room.c_id = classify.cfy_id) WHERE room.room_id like ? LIMIT ? OFFSET ?;";
      const result = await connection.query(statement, [
        Searchid,
        size,
        offset,
      ]);
      return result;
    } else {
      statement =
        "	select room.* ,classify.name as c_name from room Left JOIN classify ON (room.c_id = classify.cfy_id) LIMIT ? OFFSET ?;";
      const result = await connection.query(statement, [size, offset]);
      return result;
    }
  }
  async getroomCount() {
    const statement = "	SELECT COUNT(*) count FROM room; ";
    const result = await connection.query(statement);
    return result;
  }
  async delete(id) {
    const statement = "DELETE FROM room WHERE room_id = ?;";
    const result = await connection.execute(statement, [id]);
    return result;
  }
  async create(room_id, o_id, c_id, status) {
    const statement =
      "INSERT INTO room (room_id,o_id,c_id,status) VALUES (?,?,?,?);";
    const result = await connection.execute(statement, [
      room_id,
      o_id,
      c_id,
      status,
    ]);
    return result;
  }
  async edit(room_id, o_id, c_id, status) {
    if (status === "已入住" || status === "闲置") {
      status = status === "已入住" ? 1 : 0;
    }
    console.log(status);
    const statement =
      "UPDATE room SET o_id =?,c_id=?,status =? WHERE room_id =?;";
    const result = await connection.execute(statement, [
      o_id,
      c_id,
      status,
      room_id,
    ]);
    return result;
  }
  async search(room_id) {
    const statement = "SELECT * FROM room WHERE room_id = ?;";
    const result = await connection.execute(statement, [room_id]);
    return result;
  }
}

module.exports = new roomServer();
