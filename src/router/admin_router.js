const koaRouter = require("@koa/router");
const adminController = require("../controller/admin.controller");
const { verifyAdmin, verifyEdit } = require("../middleware/admin.middleware");

const adminRouter = new koaRouter({ prefix: "/admins" });

adminRouter.post("/createAdmin", verifyAdmin, adminController.crerte);
adminRouter.post("/adminlist", adminController.getadminList);
adminRouter.post("/delete", adminController.delete);
adminRouter.post("/edit", verifyEdit, adminController.edit);
module.exports = adminRouter;
