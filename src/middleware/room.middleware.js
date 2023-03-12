const roomService = require("../service/room.service");

const verifyChange = async (ctx, next) => {
  const { room_id, status } = ctx.request.body;
  const room = await roomService.search(room_id);
  if (room[0].length === 0) {
    return ctx.app.emit("error", "none_room", ctx);
  }
  await next();
};

const verifyCreate = async (ctx, next) => {
  const { room_id, o_id,c_id,status } = ctx.request.body;
  if (!room_id || !o_id || !c_id || !status) {
    return ctx.app.emit("error", "name_or_password_isRequired", ctx);
  }
  await next();
};

module.exports = {
  verifyChange,
  verifyCreate,
};
