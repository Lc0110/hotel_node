const koaRouter = require("@koa/router");
const loginController = require("../controller/login.controller");
const { verifyLogin } = require("../middleware/login.middleware");

const loginRouter = new koaRouter({ prefix: "/login" });

loginRouter.post("/", verifyLogin, loginController.login);
module.exports = loginRouter;
