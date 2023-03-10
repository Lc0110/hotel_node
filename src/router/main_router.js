const koaRouter = require("@koa/router");
const mainController = require("../controller/main.controller");
const {
  verifyMember,
  verifyRegister,
  verifyEdit
} = require("../middleware/member.middleware");

const mainRouter = new koaRouter({ prefix: "/main" });

mainRouter.post("/memberlist", mainController.getMemberList);
mainRouter.post("/searchmember", mainController.searchMember);
mainRouter.post("/deletemember", mainController.deleteMember);
mainRouter.post("/createmember", verifyRegister, mainController.createMember);
mainRouter.post("/login", verifyMember, mainController.login);
mainRouter.post("/edit", verifyEdit,mainController.edit);
module.exports = mainRouter;
