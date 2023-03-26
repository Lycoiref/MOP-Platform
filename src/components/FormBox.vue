<!-- 填写报修单 -->
<template>
    <div class="form-box">
        <div class="icon-box">
            <svg
                t="1679855445645"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3896"
                width="200"
                height="200"
            >
                <path
                    d="M682.666667 128.170667h128c49.322667 0 86.954667 42.752 86.954666 93.696v665.770666c0 50.901333-37.674667 93.738667-86.954666 93.738667H215.893333c-49.322667 0-86.997333-42.794667-86.997333-93.738667V221.866667c0-50.944 37.546667-93.696 86.997333-93.696H341.333333V64a21.333333 21.333333 0 0 1 42.666667 0v170.666667a21.333333 21.333333 0 0 1-42.666667 0V170.837333H215.893333c-24.533333 0-44.330667 22.485333-44.330666 51.029334v665.770666c0 28.501333 19.84 51.072 44.330666 51.072H810.666667c24.448 0 44.288-22.613333 44.288-51.072V221.866667c0-28.501333-19.797333-51.029333-44.288-51.029334h-128V234.666667a21.333333 21.333333 0 1 1-42.666667 0v-170.666667a21.333333 21.333333 0 1 1 42.666667 0v64.170667z"
                    p-id="3897"
                    fill="#ffffff"
                ></path>
                <path
                    d="M447.872 170.666667h127.786667a21.333333 21.333333 0 1 0 0-42.666667h-127.786667a21.333333 21.333333 0 1 0 0 42.666667zM341.632 384h341.333333a21.333333 21.333333 0 0 0 0-42.666667h-341.333333a21.333333 21.333333 0 0 0 0 42.666667zM341.632 554.666667h170.666667a21.333333 21.333333 0 1 0 0-42.666667h-170.666667a21.333333 21.333333 0 1 0 0 42.666667zM341.632 725.333333h341.077333a21.333333 21.333333 0 1 0 0-42.666666H341.632a21.333333 21.333333 0 1 0 0 42.666666z"
                    p-id="3898"
                    fill="#ffffff"
                ></path>
            </svg>
        </div>
        <div class="text-box">
            <div class="title">填写报修单</div>
            <div class="sub-text">手动填写相关信息</div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped lang="less">
.form-box {
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
