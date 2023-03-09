const app = require("../app");

app.on("error", (error, ctx) => {
  let code = 0;
  let message = "";
  switch (error) {
    case "name_or_password_isRequired":
      code = -1001;
      message = "用户名密码不能为空";
      break;
    case "name_isExist":
      code = -1002;
      message = "管理员已存在";
    case "name_isNotExist":
      code = -1003;
      message = "该用户名不存在";
    case "password_incorrect":
      code = -1004;
      message = "登录密码错误";
  }

  ctx.body = { code, message };
});
