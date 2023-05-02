const advertService = require("../service/advert.service");

const verifyCreate = async (ctx, next) => {
  const { imgurl, sort, status } = ctx.request.body;
  if (!imgurl || !sort || !status) {
    return ctx.app.emit("error", "name_or_password_isRequired", ctx);
  }
  const advert = await advertService.search(sort);
  if (advert.length) {
    return ctx.app.emit("error", "sort_conflict", ctx);
  }
  await next();
};

const verifyEdit = async (ctx, next) => {
  const { imgurl, sort, status } = ctx.request.body;
  if (!imgurl || !sort || !status) {
    return ctx.app.emit("error", "name_or_password_isRequired", ctx);
  }
  await next();
};

module.exports = {
  verifyCreate,
  verifyEdit,
};
