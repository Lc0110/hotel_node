const koaRouter = require("@koa/router");
const roomController = require("../controller/room.controller");
const { verifyChange, verifyCreate } = require("../middleware/room.middleware");
const roomRouter = new koaRouter({ prefix: "/room" });

roomRouter.post("/roomlist", roomController.getroomList);
roomRouter.post("/create", verifyCreate, roomController.create);
roomRouter.post("/delete", roomController.delete);
roomRouter.post("/edit", verifyCreate, roomController.edit);
roomRouter.post("/search", roomController.search);
roomRouter.post("/change", verifyChange, roomController.changeStatus);

module.exports = roomRouter;
