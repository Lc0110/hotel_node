const koaRouter = require("@koa/router");
const classifyController = require("../controller/classify.controller");
const {
  verifyCreate,
  verifyEdit,
} = require("../middleware/classify.middleware");
const classifyRouter = new koaRouter({ prefix: "/classify" });

classifyRouter.post("/classifylist", classifyController.getclassifyList);
classifyRouter.post("/create", verifyCreate, classifyController.create);
classifyRouter.post("/delete", classifyController.delete);
classifyRouter.post("/edit", verifyEdit, classifyController.edit);

module.exports = classifyRouter;
