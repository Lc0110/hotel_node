const koaRouter = require("@koa/router");
const guestController = require("../controller/guest.controller");
const { verifyCreate } = require("../middleware/guest.middleware");
const guestRouter = new koaRouter({ prefix: "/guest" });

guestRouter.post("/guestlist", guestController.getguestList);
guestRouter.post("/create", verifyCreate, guestController.create);
guestRouter.post("/delete", guestController.delete);
guestRouter.post("/edit", verifyCreate, guestController.edit);
guestRouter.post("/search", guestController.search);

module.exports = guestRouter;
