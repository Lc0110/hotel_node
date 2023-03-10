const koaRouter = require("@koa/router");
const evaController = require("../controller/eva.controller");
const { verifyCreate } = require("../middleware/eva.middleware");

const evaRouter = new koaRouter({ prefix: "/eva" });

evaRouter.post("/evalist", evaController.getEvaList);
evaRouter.post("/delete", evaController.deleteEva);
evaRouter.post("/create", verifyCreate, evaController.createEva);
evaRouter.post("/search", evaController.search);
evaRouter.post("/searchbyguest", evaController.searchByGid);
module.exports = evaRouter;
