<template>
    <div class="page">
        <img src="../../assets/success.png" alt="成功" />
        <div class="btn-box">
            <el-button type="primary" @click="router.push('/detail')">查看订单</el-button>
            <el-button @click="router.push('/')">返回主页</el-button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

let router = useRouter()
</script>

<style scoped lang="less">
.page {
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;

    img {
        width: 60vw;
        height: 60vw;
    }

    .btn-box {
        display: flex;
        justify-content: center;
        width: 100vw;
        margin: 60px;
    }
}
</style>
