const koaRouter = require("@koa/router");
const classifyController = require("../controller/classify.controller");
const { verifyCreate } = require("../middleware/classify.middleware");
const classifyRouter = new koaRouter({ prefix: "/classify" });

classifyRouter.post("/classifylist", classifyController.getclassifyList);
classifyRouter.post("/create", verifyCreate, classifyController.create);
classifyRouter.post("/delete", classifyController.delete);
classifyRouter.post("/edit", verifyCreate,classifyController.edit);

module.exports = classifyRouter;
