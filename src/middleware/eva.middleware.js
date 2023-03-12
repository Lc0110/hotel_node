const verifyCreate = async (ctx, next) => {
  const { content } = ctx.request.body;
  if (!content) {
    return ctx.app.emit("error", "name_or_password_isRequired", ctx);
  }
  await next();
};

module.exports = {
  verifyCreate,
};
