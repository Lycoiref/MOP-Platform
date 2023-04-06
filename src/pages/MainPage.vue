<script lang="ts" setup>
// 打印当前路由
// import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import MobileMainContent from '../components/MobileMainContent.vue'

// const router = useRouter()

onMounted(() => {
    // 测试连接
    axios.post('http://localhost:3000/api/test').then((res) => {
        console.log(res)
    })
})
</script>

<template>
    <div class="page">
        <template v-if="useStore().state.isMobile">
            <MobileMainContent></MobileMainContent>
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
    </div>
</template>

<style scoped lang="less">
.page {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

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
