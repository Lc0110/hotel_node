const orderService = require("../service/order.service");

class orderController {
  async getorderList(ctx, next) {
    console.log(ctx.request.body);
    const { ord_id = "", size, offset } = ctx.request.body;
    const result = await orderService.getorderList(ord_id, size, offset);
    const [length] = await orderService.getorderCount();
    ctx.body = {
      message: "获取成功！",
      data: result[0],
      count: length,
    };
  }
  async delete(ctx, next) {
    const { id } = ctx.request.body;
    const result = await orderService.delete(id);
    ctx.body = {
      message: "删除成功！",
      data: result[0],
    };
  }
  async create(ctx, next) {
    const { m_id, g_id, realname, price, in_time, out_time, status, note } =
      ctx.request.body;
    const result = await orderService.create(
      m_id,
      g_id,
      realname,
      price,
      in_time,
      out_time,
      status,
      note
    );
    ctx.body = {
      message: "创建成功！",
      data: result[0],
    };
  }
  async search(ctx, next) {
    const { m_id } = ctx.request.body;
    const result = await orderService.search(m_id);
    ctx.body = {
      message: "查询成功！",
      data: result[0],
    };
  }
  async searchOrder(ctx, next) {
    const { m_id, g_id, realname, price, in_time, out_time, status, note } =
      ctx.request.body;
    console.log(ctx.request.body);
    const result = await orderService.searchOrdId(
      m_id,
      g_id,
      realname,
      price,
      in_time,
      out_time,
      status,
      note
    );
    ctx.body = {
      message: "查询成功！",
      data: result[0],
    };
  }
  async edit(ctx, next) {
    const { gst_id, c_id, imgurl, name, price, num, area, live, description } =
      ctx.request.body;
    const result = await orderService.edit(
      gst_id,
      c_id,
      imgurl,
      name,
      price,
      num,
      area,
      live,
      description
    );
    ctx.body = {
      message: "修改成功！",
      data: result[0],
    };
  }
  async change(ctx, next) {
    const { status, ord_id } = ctx.request.body;
    const result = await orderService.change(status, ord_id);
    ctx.body = {
      message: "修改成功！",
      data: result[0],
    };
  }
}

module.exports = new orderController();
