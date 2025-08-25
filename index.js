// // 1. 引入我们刚刚安装的“厨房设备” express
// const express = require('express');

// // 2. 创建一个 express 应用实例，你可以把它想象成我们的“餐厅”本身
// const app = express();

// // 3. 定义我们餐厅的“门牌号”，也就是端口号
// const port = 3000;

// // 4. 定义一条“菜单规则”：
// //    当有顾客访问我们的“大门口”('/')时，我们就回复一句 '欢迎光临!'
// app.get('/', (req, res) => {
//   res.send('欢迎光临!');
// });

// // 5. 正式“开门营业”：
// //    让我们的“餐厅”开始在 3000 这个端口上，监听顾客的来访
// app.listen(port, () => {
//   console.log(`我们的第一个服务器，已经成功在 http://localhost:${port} 上启动了！`);
// });
//-----------------------------------------------------------------------------

// const express = require('express');
// const { goods } = require('./data.js');
// const cors = require('cors'); // 新增：引入 cors 工具包
// // 新增：从 data.js 文件里，导入我们的“食材”

// const app = express();
// const port = 3000;

// // 2. 关键！把“通行证”贴在所有菜单规则的最前面
// app.use(cors()); // <-- 确保这一行在所有 app.get/post 的上面

// // 修改：我们把根路径'/'的回复，改成更专业的 JSON 回复
// app.get('/', (req, res) => {
//   // 使用 res.json() 来发送我们的商品数据
//   res.json(goods);
// });

// app.listen(port, () => {
//   console.log(`服务器已启动，正在监听 http://localhost:${port}`);
// });
//-----------------------------------------------------------------------------

// 1. 引入所有需要的“工具包”
const express = require("express");
const { goods } = require("./data.js");
const cors = require("cors"); // <-- 确保这一行存在

const app = express();
const port = 3000;

// 2. 关键！把“通行证”贴在所有菜单规则的最前面
app.use(cors()); // <-- 确保这一行在所有 app.get/post 的上面

// 3. 我们的菜单规则
app.get("/", (req, res) => {
  res.json(goods);
});

// 4. 开门营业
app.listen(port, () => {
  console.log(`服务器已启动，正在监听 http://localhost:${port}`);
});
