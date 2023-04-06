<script lang="ts" setup>
// 打印当前路由
// import { useRouter } from 'vue-router'
import { UserFilled } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import CodeScanner from '../components/CodeScanner.vue'
import FormBox from '../components/FormBox.vue'
import RepairCard from '../components/RepairCard.vue'

// const router = useRouter()
let drawer = ref(false)

onMounted(() => {
    // 测试连接
    axios.post('http://localhost:3000/api/test').then((res) => {
        console.log(res)
    })
})
</script>

<template>
    <template v-if="useStore().state.isMobile">
        <div class="mobile-page">
            <div class="top_bar">
                <div class="user_head" @click="drawer = true">
                    <el-avatar :icon="UserFilled" :size="25" />
                    <div class="page-title">报修平台</div>
                    <div class="exit-icon">
                        <svg
                            t="1679876763428"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="2341"
                            width="200"
                            height="200"
                        >
                            <path
                                d="M560 128H136a8 8 0 0 0-8 8v752a8 8 0 0 0 8 8h424c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32H96c-17.673 0-32-14.327-32-32V96c0-17.673 14.327-32 32-32h464c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32z m286.745 352.127L720.29 353.673c-12.496-12.497-12.496-32.758 0-45.255 12.497-12.497 32.758-12.497 45.255 0l181.02 181.02c12.496 12.496 12.496 32.757 0 45.254l-181.02 181.02c-12.497 12.496-32.758 12.496-45.255 0-12.496-12.497-12.496-32.759 0-45.256l126.33-126.329H318.254c-17.673 0-32-14.326-32-32 0-17.673 14.327-32 32-32h528.49z"
                                fill="#ffffff"
                                p-id="2342"
                            ></path>
                        </svg>
                    </div>
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
            width: 100vw;
            display: flex;
            justify-content: space-between;
            color: #fff;
            font-weight: bolder;
            font-size: 16px;

            .exit-icon {
                width: 25px;
                height: 25px;

                svg {
                    width: 100%;
                    height: 100%;
                }
            }
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
