const koaRouter = require("@koa/router");
const orderController = require("../controller/order.controller");
const { verifyCreate } = require("../middleware/order.middleware");
const orderRouter = new koaRouter({ prefix: "/order" });

orderRouter.post("/orderlist", orderController.getorderList);
orderRouter.post("/create", verifyCreate, orderController.create);
orderRouter.post("/delete", orderController.delete);
orderRouter.post("/change", orderController.change);
orderRouter.post("/search", orderController.search);
orderRouter.post("/searchOrder", orderController.searchOrder);
orderRouter.post("/getdata",orderController.getData)
orderRouter.post("/getSevenData",orderController.getSevenData)
orderRouter.post("/getTurndata",orderController.getTurnData)
orderRouter.post("/getTurnSevenData",orderController.getTurnSevenData)

module.exports = orderRouter;
