const verifyCreate = async (ctx, next) => {
  const { imgurl, sort, status } = ctx.request.body;
  if (!imgurl || !sort || !status) {
    return ctx.app.emit("error", "name_or_password_isRequired", ctx);
  }
  await next();
};


module.exports = {
  verifyCreate
};
