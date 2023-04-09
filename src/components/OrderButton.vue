<!-- 扫描二维码 -->
<template>
    <div class="QR-box" @click="router.push('/orders')">
        <div class="icon-box">
            <svg
                t="1679851369324"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2799"
                width="200"
                height="200"
            >
                <path
                    d="M928 544 96 544c-17.664 0-32-14.336-32-32s14.336-32 32-32l832 0c17.696 0 32 14.336 32 32S945.696 544 928 544zM832 928l-192 0c-17.696 0-32-14.304-32-32s14.304-32 32-32l192 0c17.664 0 32-14.336 32-32l0-160c0-17.696 14.304-32 32-32s32 14.304 32 32l0 160C928 884.928 884.928 928 832 928zM352 928 192 928c-52.928 0-96-43.072-96-96l0-160c0-17.696 14.336-32 32-32s32 14.304 32 32l0 160c0 17.664 14.368 32 32 32l160 0c17.664 0 32 14.304 32 32S369.664 928 352 928zM128 384c-17.664 0-32-14.336-32-32L96 192c0-52.928 43.072-96 96-96l160 0c17.664 0 32 14.336 32 32s-14.336 32-32 32L192 160C174.368 160 160 174.368 160 192l0 160C160 369.664 145.664 384 128 384zM896 384c-17.696 0-32-14.336-32-32L864 192c0-17.632-14.336-32-32-32l-192 0c-17.696 0-32-14.336-32-32s14.304-32 32-32l192 0c52.928 0 96 43.072 96 96l0 160C928 369.664 913.696 384 896 384z"
                    fill="#ffffff"
                    p-id="2800"
                ></path>
            </svg>
        </div>
        <div class="text-box">
            <div class="title">订单大厅</div>
            <div class="sub-text">去订单大厅领取待处理订单</div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

let router = useRouter()
</script>

<style scoped lang="less">
.QR-box {
    width: 40vw;
    height: 20vw;
    border-radius: 2.5vw;
    background-color: #66ccff;
    border: 2px solid #fff;
    display: flex;
    justify-content: center;

    .icon-box {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .text-box {
        width: 60%;
        height: 100%;
        margin-left: 10px;
        display: flex;
        align-content: center;
        // justify-content: center;
        flex-wrap: wrap;

        .title {
            font-size: 16px;
            color: #ffffff;
            font-weight: bolder;
        }
        .sub-text {
            font-size: 12px;
            color: #ffffff;
        }
    }
}
</style>
