const memberService = require("../service/member.service");

const verifyMember = async (ctx, next) => {
  console.log(ctx.request.body);
  const { nickname, password } = ctx.request.body;
  if (!nickname || !password) {
    return ctx.app.emit("error", "name_or_password_isRequired", ctx);
  }
  const result = await memberService.searchMember(nickname);
  const verifypassword = result[0][0].password;
  if (verifypassword !== password || !verifypassword) {
    return ctx.app.emit("error", "password_incorrect", ctx);
  }
  await next();
};

module.exports = {
  verifyMember,
};
