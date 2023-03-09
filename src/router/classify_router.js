const koaRouter = require("@koa/router");
const classifyController = require("../controller/classify.controller");
const classifyRouter = new koaRouter({ prefix: "/classify" });

classifyRouter.post("/classifylist", classifyController.getclassifyList);
classifyRouter.post("/create", classifyController.create);
classifyRouter.post("/delete", classifyController.delete);
classifyRouter.post("/edit", classifyController.edit);

module.exports = classifyRouter;
