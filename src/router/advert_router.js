const koaRouter = require("@koa/router");
const advertController = require("../controller/advert.controller");
const advertRouter = new koaRouter({ prefix: "/advert" });
const multer = require("@koa/multer");
const { verifyCreate, verifyEdit } = require("../middleware/advert.middleware");
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, "./upload");
    },
    filename(req, file, callback) {
      callback(null, Date.now() + "_" + file.originalname);
    },
  }),
});

advertRouter.post("/advertlist", advertController.getAdvertList);
advertRouter.post("/upload", upload.single("file"), advertController.upload);
advertRouter.post("/create", verifyCreate, advertController.create);
advertRouter.post("/delete", advertController.delete);
advertRouter.post("/edit", verifyEdit, advertController.edit);

module.exports = advertRouter;
