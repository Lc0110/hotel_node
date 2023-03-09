const koaRouter = require("@koa/router");
const usermenuController = require("../controller/usermenu.controller");

const usermenuRouter = new koaRouter({ prefix: "/usermenu" });

usermenuRouter.post("/", usermenuController.search);
module.exports = usermenuRouter;
