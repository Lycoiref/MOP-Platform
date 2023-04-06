<template>
    <div class="page">
        <div class="header" @click="router.go(-1)">返回</div>
        <div class="content">
            <div class="detail_box"></div>
            <div class="detail_box middle"></div>
            <div class="detail_box middle"></div>
            <div class="detail_box"></div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped lang="less">
.page {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header {
        width: 100%;
        height: 50px;
        background-color: rgb(87, 168, 255);
    }

    .content {
        width: 100vw;
        height: calc(~'100% - 50px');
        display: flex;
        flex-direction: column;
        align-items: center;

        .detail_box {
            width: 95%;
            height: 20%;
            border: 1px solid black;
        }

        .middle {
            height: 30%;
        }
    }
}
</style>
