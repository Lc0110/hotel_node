const evaService = require("../service/eva.service");

class MainController {
  async getEvaList(ctx, next) {
    const { content, size, offset } = ctx.request.body;
    const result = await evaService.getEvaList(content, size, offset);
    const [length] = await evaService.getEvaCount();
    ctx.body = {
      message: "获取成功！",
      data: result[0],
      count: length,
    };
  }
  async deleteEva(ctx, next) {
    const { id } = ctx.request.body;
    const result = await evaService.deleteeva(id);
    ctx.body = {
      message: "删除成功！",
      data: result[0],
    };
  }
  async createEva(ctx, next) {
    const { m_id, g_id, content } = ctx.request.body;
    const result = await evaService.createeva(m_id, g_id, content);
    ctx.body = {
      message: "创建成功！",
      data: result[0],
    };
  }
  async search(ctx, next) {
    const { mem_id } = ctx.request.body;
    const result = await evaService.search(mem_id);
    ctx.body = {
      message: "查询成功！",
      data: result[0],
    };
  }
  async searchByGid(ctx, next) {
    const { g_id } = ctx.request.body;
    const result = await evaService.searchByguest(g_id);
    ctx.body = {
      message: "查询成功！",
      data: result[0],
    };
  }
}

module.exports = new MainController();
