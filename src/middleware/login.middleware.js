const adminService = require("../service/admin.service");

const verifyLogin = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  if (!username || !password) {
    return ctx.app.emit("error", "name_or_password_isRequired", ctx);
  }
  const admins = await adminService.findAdminByName(username);
  const admin = admins[0];
  if (!admin) {
    return ctx.app.emit("error", "name_isNotExist", ctx);
  }
  if (admin.password !== password) {
    return ctx.app.emit("error", "password_incorrect", ctx);
  }
  if (admin.status === 0) {
    return ctx.app.emit("error", "admin_is_baned", ctx);
  }
  await next();
};

module.exports = {
  verifyLogin,
};
