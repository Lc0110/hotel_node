const adminService = require("../service/admin.service");

class LoginController {
  async login(ctx, next) {
    const { username } = ctx.request.body;
    const result = await adminService.findAdminByName(username);
    ctx.body = {
      message: "登录成功！",
      data: result[0],
    };
  }
}

module.exports = new LoginController();
