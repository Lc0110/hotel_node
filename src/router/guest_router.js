const koaRouter = require("@koa/router");
const guestController = require("../controller/guest.controller");
const guestRouter = new koaRouter({ prefix: "/guest" });

guestRouter.post("/guestlist", guestController.getguestList);
guestRouter.post("/create", guestController.create);
guestRouter.post("/delete", guestController.delete);
guestRouter.post("/edit", guestController.edit);
guestRouter.post("/search", guestController.search);

module.exports = guestRouter;
