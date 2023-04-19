<template>
    <div class="page">
        <MobileHeader></MobileHeader>
        <div class="content">
            <div class="invoice-box"></div>
            <div class="invoice-box"></div>
            <el-button class="btn" type="primary" round>发起报销</el-button>
        </div>
    </div>
</template>

<script setup>
import MobileHeader from '@/components/MobileHeader.vue'
</script>

<style scoped lang="less">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .invoice-box {
        width: 95%;
        height: 20vh;
        margin: 20px 0 0 0;
        border: 1px solid #66ccff;
        border-radius: 15px;
    }

    .btn {
        margin-top: 20px;
    }
}
</style>
