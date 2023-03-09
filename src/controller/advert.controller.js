const advertService = require("../service/advert.service");

class AdvertController {
  async getAdvertList(ctx, next) {
    const { size, offset } = ctx.request.body;
    const result = await advertService.getAdvertList(size, offset);
    const [length] = await advertService.getAdvertCount();
    ctx.body = {
      message: "获取成功！",
      data: result[0],
      count: length,
    };
  }
  async upload(ctx, next) {
    console.log(ctx.request.file);
    ctx.body = {
      message: "文件上传成功！",
      data: ctx.request.file,
      url: "http://localhost:8000/" + ctx.request.file.filename,
    };
  }
  async delete(ctx, next) {
    const { id } = ctx.request.body;
    const result = await advertService.delete(id);
    ctx.body = {
      message: "删除成功！",
      data: result[0],
    };
  }
  async create(ctx, next) {
    const { imgurl, sort, status } = ctx.request.body;
    const result = await advertService.create(imgurl, sort, status);
    ctx.body = {
      message: "创建成功！",
      data: result[0],
    };
  }
  async edit(ctx, next) {
    const { adv_id, imgurl, sort, status } = ctx.request.body;
    const result = await advertService.edit(adv_id, imgurl, sort, status);
    ctx.body = {
      message: "修改成功！",
      data: result[0],
    };
  }
}

module.exports = new AdvertController();
