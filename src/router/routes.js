import * as VueRouter from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import ReportFault from '../pages/Report/ReportFault.vue'
import SubmitSuccess from '../pages/Report/SubmitSuccess.vue'
import InvoiceList from '../pages/Invoice/InvoiceList.vue'
import InvoiceDetail from '../pages/Invoice/InvoiceDetail.vue'
import ReportDetail from '../pages/Report/ReportDetail.vue'
import MarkPage from '../pages/Report/MarkPage.vue'

// 1. 定义路由组件.
// 也可以从其他文件导入
const About = { template: '<div>About</div>' }
const NotFound = { template: '<div>Sorry,Page not Found</div>' }

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    { path: '/', component: MainPage },
    { path: '/report', component: ReportFault },
    { path: '/report/:id', component: ReportDetail },
    { path: '/submit', component: SubmitSuccess },
    { path: '/mark/:id', component: MarkPage },
    { path: '/invoice', component: InvoiceList },
    { path: '/invoice/:id', component: InvoiceDetail },
    { path: '/about', component: About },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

// 导出router
export default router
