<template>
    <div class="page">
        <div class="about">关于</div>
        <div class="login">
            <LoginBox></LoginBox>
        </div>
    </div>
</template>

<script setup>
import LoginBox from '@/components/User/LoginBox.vue'
</script>

<style scoped lang="less">
.about {
    margin: 10px 20px;
    font-size: 15px;
    color: #000;
    // 靠右
    text-align: right;
}
</style>
