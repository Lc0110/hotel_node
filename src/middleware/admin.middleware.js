const adminService = require("../service/admin.service");

const verifyAdmin = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  if (!username || !password) {
    return ctx.app.emit("error", "name_or_password_isRequired", ctx);
  }
  const admins = await adminService.findAdminByName(username);
  if (admins.length) {
    return ctx.app.emit("error", "name_isExist", ctx);
  }
  await next();
};

const verifyEdit = async (ctx, next) => {
  const { username, phonenumber,status,password } = ctx.request.body;
  if (!username || !password || !phonenumber || !status) {
    return ctx.app.emit("error", "name_or_password_isRequired", ctx);
  }
  await next();
};

module.exports = {
  verifyAdmin,
  verifyEdit
};
