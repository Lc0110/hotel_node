const memberService = require("../service/member.service");

class MainController {
  async searchMember(ctx, next) {
    const { nickname } = ctx.request.body;
    const result = await memberService.searchMember(nickname);
    ctx.body = {
      message: "查询成功！",
      data: result[0],
    };
  }
  async getMemberList(ctx, next) {
    const { nickname, size, offset } = ctx.request.body;
    const result = await memberService.getMemberList(nickname, size, offset);
    const [length] = await memberService.getMemberCount();
    ctx.body = {
      message: "获取成功！",
      data: result[0],
      count: length,
    };
  }
  async deleteMember(ctx, next) {
    const { id } = ctx.request.body;
    const result = await memberService.deletemember(id);
    ctx.body = {
      message: "删除成功！",
      data: result[0],
    };
  }
  async createMember(ctx, next) {
    console.log(ctx.request.body);
    const { avatarUrl, nickname, password, realname, phonenumber } =
      ctx.request.body;
    const result = await memberService.createmember(
      avatarUrl,
      nickname,
      password,
      realname,
      phonenumber
    );
    ctx.body = {
      message: "创建成功！",
      data: result[0],
    };
  }
  async login(ctx, next) {
    console.log(123);
    console.log(ctx.request.body);
    const { nickname, password } = ctx.request.body;
    const result = await memberService.searchMember(nickname);
    ctx.body = {
      message: "登录成功！",
      data: result[0],
    };
  }
  async edit(ctx, next) {
    console.log(ctx.request.body);
    const { mem_id, nickname, realname, phonenumber, gender } =
      ctx.request.body;
    const result = await memberService.edit(
      mem_id,
      nickname,
      realname,
      phonenumber,
      gender
    );
    ctx.body = {
      message: "修改成功！",
      data: result[0],
    };
  }
}

module.exports = new MainController();
