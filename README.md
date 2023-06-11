# 报修平台管理系统前端

基于Vue3.0+Element-Plus的报修平台管理系统前端

## 接入项目
```bash
# 克隆项目
git clone https://github.com/Lycoiref/MOP-Platform.git
cd MOP-Platform
# 安装依赖并运行
yarn && yarn dev
```

由于项目使用了ESLint与Prettier进行代码风格检查，因此需要在VsCode中安装`ESLint Prettier`插件，并在设置中开启保存时自动格式化代码。

## 技术栈
- Vue3.0 + Vite 快速且轻量化的前端开发框架
- Element-Plus 基于Vue3.0的组件库
- Axios 基于Promise的HTTP库，能够轻松的在项目中发送异步请求
- ECharts 基于JavaScript的数据可视化库
- Vue-Router 基于Vue3.0的路由管理器
- ESLint + Prettier 代码风格检查工具（规范开发）

## 项目结构
```
MOP-Platform
├── README.md
├── config.json
├── index.html
├── jsconfig.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── icons
│   │   ├── success.png
│   │   └── vue.svg
│   ├── components
│   │   ├── Admin
│   │   ├── CodeScanner.vue
│   │   ├── Engineer
│   │   ├── FormBox.vue
│   │   ├── InvoiceCard.vue
│   │   ├── MarkBox.vue
│   │   ├── MobileHeader.vue
│   │   ├── MobileMainContent.vue
│   │   ├── RepairCard.vue
│   │   └── User
│   ├── main.js
│   ├── pages
│   │   ├── Admin
│   │   ├── Engineer
│   │   ├── Invoice
│   │   ├── MainPage.vue
│   │   ├── Report
│   │   └── User
│   ├── router
│   │   └── routes.js
│   └── style.css
├── vite.config.js
├── yarn-error.log
└── yarn.lock
```
