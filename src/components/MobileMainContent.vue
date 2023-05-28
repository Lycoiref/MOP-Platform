<template>
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
            <div v-if="role === 'user'" class="utils-section">
                <CodeScanner></CodeScanner>
                <FormBox></FormBox>
            </div>
            <div v-else-if="role === 'engineer'" class="utils-section">
                <OrderButton></OrderButton>
                <InvoiceButton></InvoiceButton>
            </div>
            <div v-else-if="role === 'admin'" class="utils-section">
                <SelectBar />
            </div>
            <div class="history-recorder">
                <div v-if="role === 'admin'" class="title-box">维修单列表</div>
                <div v-else class="title-box">历史报修记录</div>
                <div v-if="role === 'engineer'" class="select-bar">
                    <div class="bar selected">全部</div>
                    <div class="bar">待处理</div>
                    <div class="bar">待评价</div>
                    <div class="bar">已完成</div>
                </div>
                <div v-else-if="role === 'admin'" class="filter">
                    <el-select v-model="value" class="selector" placeholder="Select" size="small">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                    <el-select v-model="value" class="selector" placeholder="Select" size="small">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </div>
                <div class="card-box">
                    <RepairCard :role="role"></RepairCard>
                    <RepairCard :role="role"></RepairCard>
                    <RepairCard :role="role"></RepairCard>
                    <RepairCard :role="role"></RepairCard>
                </div>
            </div>
        </div>
        <el-drawer v-model="drawer" :with-header="false" :direction="'ltr'" size="70%">
            <div class="login_box">
                <div class="user-avatar">
                    <el-avatar :icon="UserFilled" :size="50" class="avatar" style="font-size: 25px" />
                    <div class="login_text">注册/登录</div>
                </div>
                <div class="switch-role">
                    <div class="role" @click="changeRole(1)">用户</div>
                    <div class="role" @click="changeRole(2)">维修人员</div>
                    <div class="role" @click="changeRole(3)">维修主管</div>
                </div>
            </div>
        </el-drawer>
        <div class="background-page">
            <div class="color-box"></div>
        </div>
    </div>
</template>

<script setup>
import CodeScanner from '../components/CodeScanner.vue'
import FormBox from '../components/FormBox.vue'
import RepairCard from '../components/RepairCard.vue'
import OrderButton from './Engineer/OrderButton.vue'
import InvoiceButton from './Engineer/InvoiceButton.vue'
import SelectBar from '../components/Admin/SelectBar.vue'
import { UserFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'

let drawer = ref(false)
let props = defineProps({
    role: {
        type: String,
        default: 'user',
    },
})
let role = ref(props.role)
const value = ref('')
const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]

const changeRole = (roleCode) => {
    console.log(roleCode)
    switch (roleCode) {
        case 1:
            role.value = 'user'
            break
        case 2:
            role.value = 'engineer'
            break
        case 3:
            role.value = 'admin'
            break
    }
}
</script>

<style scoped lang="less">
.mobile-page {
    width: 100vw;
    height: 100vh;

    .top_bar {
        width: 100vw;
        height: 5vh;

        .user_head {
            margin: 10px;
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

        .select-bar {
            margin: 15px 0;
            width: 100vw;
            display: flex;
            justify-content: space-around;

            & .selected {
                color: #66ccff;
                font-weight: bold;
            }
        }

        .filter {
            display: flex;
            .selector {
                margin: 10px;
            }
        }

        .card-box {
            overflow: auto;
            // 隐藏滚动条
            &::-webkit-scrollbar {
                display: none;
            }
        }

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
        // align-items: center;
        justify-content: center;
        flex-direction: column;

        .user-avatar {
            display: flex;
            .login_text {
                display: flex;
                align-items: center;
                margin-left: 20px;
                font-size: 16px;
            }
        }

        .switch-role {
            width: 100%;
            margin-top: 30px;

            .role {
                width: 100%;
                height: 60px;
                display: flex;
                align-items: center;
                font-weight: bolder;
            }
        }
    }
}
</style>
