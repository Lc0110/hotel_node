const roomService = require("../service/room.service");

class roomController {
  async getroomList(ctx, next) {
    console.log(ctx.request.body);
    const { room_id = "", size, offset } = ctx.request.body;
    const result = await roomService.getroomList(room_id, size, offset);
    const [length] = await roomService.getroomCount();
    ctx.body = {
      message: "获取成功！",
      data: result[0],
      count: length,
    };
  }
  async delete(ctx, next) {
    const { id } = ctx.request.body;
    const result = await roomService.delete(id);
    ctx.body = {
      message: "删除成功！",
      data: result[0],
    };
  }
  async create(ctx, next) {
    const { room_id, o_id, c_id, status } = ctx.request.body;
    const result = await roomService.create(room_id, o_id, c_id, status);
    ctx.body = {
      message: "创建成功！",
      data: result[0],
    };
  }
  async search(ctx, next) {
    const { room_id } = ctx.request.body;
    const result = await roomService.search(room_id);
    ctx.body = {
      message: "查询成功！",
      data: result[0],
    };
  }
  async edit(ctx, next) {
    console.log(ctx.request.body);
    const { room_id, o_id, c_id, status } = ctx.request.body;
    const result = await roomService.edit(room_id, o_id, c_id, status);
    ctx.body = {
      message: "修改成功！",
      data: result[0],
    };
  }
  async changeStatus(ctx, next) {
    const { room_id, status } = ctx.request.body;
    const result = await roomService.changeStatus(room_id, status);
    ctx.body = {
      message: "修改成功！",
      data: result[0],
    };
  }
}

module.exports = new roomController();
