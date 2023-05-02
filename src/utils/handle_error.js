const app = require("../app");

app.on("error", (error, ctx) => {
  let code = 0;
  let message = "";
  console.log(error);
  switch (error) {
    case "name_or_password_isRequired":
      code = -1001;
      message = "信息不能为空";
      break;
    case "name_isExist":
      code = -1002;
      message = "管理员已存在";
      break;
    case "name_isNotExist":
      code = -1003;
      message = "该用户名不存在";
      break;
    case "password_incorrect":
      code = -1004;
      message = "登录密码错误";
      break;
    case "admin_is_baned":
      code = -1005;
      message = "该管理员已经被禁止";
      break;
    case "rename_isExist":
      code = -1006;
      message = "该用户已经存在";
      break;
    case "date_error":
      code = -1007;
      message = "日期输入错误";
      break;
    case "none_room":
      code = -1008;
      message = "房间不存在";
    case "sort_conflict":
      code = -1009;
      message = "排序已存在";
  }

  ctx.body = { code, message };
  console.log(ctx.body);
});
