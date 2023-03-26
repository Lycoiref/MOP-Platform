<script setup>
// 打印当前路由
// import { useRouter } from 'vue-router'
import { UserFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import CodeScanner from '../components/CodeScanner.vue'
import FormBox from '../components/FormBox.vue'
import RepairCard from '../components/RepairCard.vue'

// const router = useRouter()
let drawer = ref(false)

// console.log(mobile)
</script>

<template>
    <template v-if="useStore().state.isMobile">
        <div class="mobile-page">
            <div class="top_bar">
                <div class="user_head" @click="drawer = true">
                    <el-avatar :icon="UserFilled" :size="25" />
                </div>
            </div>
            <div class="body">
                <div class="utils-section">
                    <CodeScanner></CodeScanner>
                    <FormBox></FormBox>
                </div>
                <div class="history-recorder">
                    <div class="title-box">历史报修记录</div>
                    <RepairCard></RepairCard>
                    <RepairCard></RepairCard>
                </div>
            </div>
            <el-drawer v-model="drawer" :with-header="false" :direction="'ltr'" size="70%">
                <div class="login_box">
                    <el-avatar :icon="UserFilled" :size="50" class="avatar" style="font-size: 25px" />
                    <div class="login_text">注册/登录</div>
                </div>
            </el-drawer>
            <div class="background-page">
                <div class="color-box"></div>
            </div>
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

    .body {
        width: 100vw;
        height: 90vh;
        display: flex;
        justify-content: center;
        // align-items: flex-start;
        flex-wrap: wrap;

        .utils-section {
            width: 100%;
            height: 20vw;
            padding-top: 20px;
            display: flex;
            justify-content: space-around;
        }

        .history-recorder {
            width: 80vw;
            height: calc(90vh - 20vw - 50px);
            display: flex;
            align-items: center;
            flex-direction: column;

            .title-box {
                margin-top: 20px;
                width: 100%;
                height: 25vw;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                border-radius: 20px;
                color: #333;
                background-color: #fff;
                // border: 1px solid #333;
            }
        }
    }

    .background-page {
        position: absolute;
        z-index: -1;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: #f4f4f4;

        .color-box {
            width: 100vw;
            height: 30vh;
            background-color: #66ccff;
        }
    }

    .login_box {
        width: 100%;
        // height: 200px;
        display: flex;
        align-items: center;

        .login_text {
            margin-left: 20px;
            font-size: 14px;
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
