const classifyService = require("../service/classify.service");

const verifyCreate = async (ctx, next) => {
  const { name, sort } = ctx.request.body;
  if (!name || !sort) {
    return ctx.app.emit("error", "name_or_password_isRequired", ctx);
  }
  const classify = await classifyService.search(sort);
  if (classify.length) {
    return ctx.app.emit("error", "sort_conflict", ctx);
  }
  await next();
};

const verifyEdit = async (ctx, next) => {
  const { name, sort } = ctx.request.body;
  if (!name || !sort) {
    return ctx.app.emit("error", "name_or_password_isRequired", ctx);
  }
  await next();
};
module.exports = {
  verifyCreate,
  verifyEdit,
};
