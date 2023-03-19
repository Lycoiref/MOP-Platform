<script setup>
// 打印当前路由
import { useRouter } from 'vue-router'
import { UserFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'

const router = useRouter()
let drawer = ref(false)

const checkDevice = () => {
    const ua = navigator.userAgent
    const ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
    const isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)
    const isAndroid = ua.match(/(Android)\s+([\d.]+)/)
    const isMobile = isIphone || isAndroid
    return isMobile
}

let mobile = checkDevice()

console.log(router.currentRoute.value.path)
</script>

<template>
    <template v-if="mobile">
        <div class="mobile-page">
            <div class="top_bar">
                <div class="user_head" @click="drawer = true">
                    <el-avatar :icon="UserFilled" :size="25" />
                </div>
            </div>
            <el-drawer v-model="drawer" :with-header="false" :direction="'ltr'" size="70%">
                <div class="login_box">
                    <el-avatar :icon="UserFilled" :size="50" class="avatar" />
                </div>
            </el-drawer>
        </div>
    </template>
    <template v-else>
        <div class="page">
            <div class="top_bar">
                <div class="top_item">首页</div>
                <div class="top_item">联系客服</div>
                <div class="top_item">关于</div>
                <div class="top_item item_end">登陆/注册</div>
            </div>
        </div>
    </template>
</template>

<style scoped lang="less">
.mobile-page {
    width: 100vw;
    height: 100vh;

    .top_bar {
        width: 100vw;
        height: 5vh;

        .user_head {
            margin: 10px;
        }
    }

    .login_box {
        width: 100%;
        height: 200px;
        font-size: 50px;

        .avatar {
            .el-icon {
                width: 50px;
            }
        }
    }
}

.page {
    width: 100vw;
    height: 100vh;

    .top_bar {
        width: 100%;
        height: 45px;
        // background-color: #f5f5f5;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 14px;

        .top_item {
            width: 100px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            color: #333;
            cursor: pointer;
        }

        .item_end {
            margin-left: auto;
        }
    }
}
</style>
