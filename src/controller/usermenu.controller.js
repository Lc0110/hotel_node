const adminService = require("../service/admin.service");

class UsermenuController {
  async search(ctx, next) {
    const result = await adminService.findUsermenu();
    ctx.body = {
      message: "获取成功！",
      data: result[0],
    };
  }
}

module.exports = new UsermenuController();
