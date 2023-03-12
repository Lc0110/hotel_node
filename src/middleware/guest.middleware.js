const verifyCreate = async (ctx, next) => {
  const { imgurl, name, price, area, live } = ctx.request.body;
  if (!imgurl || !name || !price || !area || !live) {
    return ctx.app.emit("error", "name_or_password_isRequired", ctx);
  }

  await next();
};

module.exports = {
  verifyCreate,
};
