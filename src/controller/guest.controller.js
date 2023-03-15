const guestService = require("../service/guest.service");

class guestController {
  async getguestList(ctx, next) {
    const { name = "", size, offset } = ctx.request.body;
    console.log(name);
    const result = await guestService.getguestList(name, size, offset);
    const [length] = await guestService.getguestCount();
    ctx.body = {
      message: "获取成功！",
      data: result[0],
      count: length,
    };
  }
  async delete(ctx, next) {
    const { id } = ctx.request.body;
    const result = await guestService.delete(id);
    ctx.body = {
      message: "删除成功！",
      data: result[0],
    };
  }
  async create(ctx, next) {
    const {
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
    } = ctx.request.body;
    const result = await guestService.create(
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
    );
    ctx.body = {
      message: "创建成功！",
      data: result[0],
    };
  }
  async search(ctx, next) {
    const { gst_id } = ctx.request.body;
    const result = await guestService.search(gst_id);
    ctx.body = {
      message: "查询成功！",
      data: result[0],
    };
  }
  async edit(ctx, next) {
    const {
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
      is_window,
    } = ctx.request.body;
    const result = await guestService.edit(
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
    );
    ctx.body = {
      message: "修改成功！",
      data: result[0],
    };
  }
  async getData(ctx, next) {
    const result = await guestService.get();
    ctx.body = {
      message: "获取成功",
      data: result[0],
    };
  }
  async getSevenData(ctx, next) {
    const result = await guestService.getSevenData();
    ctx.body = {
      message: "获取成功",
      data: result[0],
    };
  }
}

module.exports = new guestController();
