const orderService = require("../service/order.service");

const verifyCreate = async (ctx, next) => {
  console.log(ctx.request.body);
  const { in_time, out_time } = ctx.request.body;
  const In = in_time.slice(8);
  const Out = out_time.slice(8);
  console.log(Out - In);
  if (Out - In <= 0) {
    return ctx.app.emit("error", "date_error", ctx);
  }
  await next();
};

module.exports = {
  verifyCreate,
};
