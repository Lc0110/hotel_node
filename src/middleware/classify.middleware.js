const verifyCreate = async (ctx, next) => {
  const { name, sort } = ctx.request.body;
  if (!name || !sort) {
    return ctx.app.emit("error", "name_or_password_isRequired", ctx);
  }
  await next();
};

module.exports = {
  verifyCreate,
};
