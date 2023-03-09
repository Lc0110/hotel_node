const koaRouter = require("@koa/router");
const roomController = require("../controller/room.controller");
const roomRouter = new koaRouter({ prefix: "/room" });

roomRouter.post("/roomlist", roomController.getroomList);
roomRouter.post("/create", roomController.create);
roomRouter.post("/delete", roomController.delete);
roomRouter.post("/edit", roomController.edit);
roomRouter.post("/search", roomController.search);

module.exports = roomRouter;
