const memberService = require("../service/member.service");

const verifyMember = async (ctx, next) => {
  console.log(ctx.request.body);
  const { nickname, password } = ctx.request.body;
  if (!nickname || !password) {
    return ctx.app.emit("error", "name_or_password_isRequired", ctx);
  }
  const result = await memberService.searchMember(nickname);
  console.log(result[0]);
  if (result[0].length === 0) {
    return ctx.app.emit("error", "name_isNotExist", ctx);
  }
  const verifypassword = result[0][0].password;
  if (verifypassword !== password || !verifypassword) {
    return ctx.app.emit("error", "password_incorrect", ctx);
  }
  await next();
};

const verifyRegister = async (ctx, next) => {
  console.log(ctx.request.body);
  const { nickname, password, realname, phonenumber } = ctx.request.body;
  if (!nickname || !password || !realname || !phonenumber) {
    return ctx.app.emit("error", "name_or_password_isRequired", ctx);
  }
  const result = await memberService.searchMember(nickname);
  console.log(result[0]);
  if (result[0].length !== 0) {
    return ctx.app.emit("error", "rename_isExist", ctx);
  }
  await next();
};

const verifyEdit = async (ctx, next) => {
  console.log(ctx.request.body);
  const { realname, phonenumber } = ctx.request.body;
  if (!realname || !phonenumber) {
    return ctx.app.emit("error", "name_or_password_isRequired", ctx);
  }
  await next();
};

module.exports = {
  verifyMember,
  verifyRegister,
  verifyEdit,
};
