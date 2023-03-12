const adminService = require("../service/admin.service");

class AdminController {
  async crerte(ctx, next) {
    const { username, phonenumber, status, password } = ctx.request.body;
    const result = await adminService.create(
      username,
      phonenumber,
      status,
      password
    );
    ctx.body = {
      message: "添加管理员成功！",
      data: result,
    };
  }
  async getadminList(ctx, next) {
    const { username = "", size, offset } = ctx.request.body;
    const result = await adminService.getadminList(username, size, offset);
    const [length] = await adminService.getadminCount();
    ctx.body = {
      message: "获取成功！",
      data: result[0],
      count: length,
    };
  }
  async delete(ctx, next) {
    const { id } = ctx.request.body;
    const result = await adminService.delete(id);
    ctx.body = {
      message: "删除成功！",
      data: result[0],
    };
  }
  async edit(ctx, next) {
    const { adm_id, username, phonenumber, status, password } =
      ctx.request.body;
    console.log(ctx.request.body);
    // let newStatus = "";
    // if (status === "启用") {
    //   newStatus = 1;
    // } else {
    //   newStatus = 0;
    // }
    const result = await adminService.edit(
      adm_id,
      username,
      phonenumber,
      status,
      password
    );
    ctx.body = {
      message: "修改成功！",
      data: result[0],
    };
  }
}

module.exports = new AdminController();
