# 1. 选择一个“基础底座”
# 我们选择一个已经预装好了 Node.js v22 的、非常轻量级的官方镜像
FROM node:22-alpine

# 2. 在“集装箱”内部，创建一个用来存放我们代码的文件夹，叫做 /app
WORKDIR /app

# 3. 复制“营业执照”和“设备清单”
# 把我们项目里的 package.json 和 package-lock.json 先复制进去
COPY package*.json ./

# 4. 在“集装箱”内部，安装所有“厨房设备”
# 运行 npm install 来下载所有依赖
RUN npm install

# 5. 复制我们所有的“菜谱”（源代码）
# 把当前文件夹下的所有其他文件（index.js, data.js 等）都复制进去
COPY . .

# 6. 告诉外界，我们的“餐厅”开在 3000 号“窗口”
EXPOSE 3000

# 7. 定义“集装箱”启动时的“开业指令”
# 当容器启动时，自动运行 "node index.js"
CMD ["node", "index.js"]