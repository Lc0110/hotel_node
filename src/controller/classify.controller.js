const classifyService = require("../service/classify.service");

class classifyController {
  async getclassifyList(ctx, next) {
    const { Isfirst, size, offset } = ctx.request.body;
    const result = await classifyService.getclassifyList(Isfirst, size, offset);
    const [length] = await classifyService.getclassifyCount();
    ctx.body = {
      message: "获取成功！",
      data: result[0],
      count: length,
    };
  }
  async delete(ctx, next) {
    const { id } = ctx.request.body;
    const result = await classifyService.delete(id);
    ctx.body = {
      message: "删除成功！",
      data: result[0],
    };
  }
  async create(ctx, next) {
    const { name, sort } = ctx.request.body;

    const result = await classifyService.create(name, sort);
    ctx.body = {
      message: "创建成功！",
      data: result[0],
    };
  }
  async edit(ctx, next) {
    const { cfy_id, name, sort } = ctx.request.body;
    const result = await classifyService.edit(cfy_id, name, sort);
    ctx.body = {
      message: "修改成功！",
      data: result[0],
    };
  }
}

module.exports = new classifyController();
