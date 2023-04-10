<template>
    <div class="login-box">
        <div class="content">
            <div class="title">登录</div>
            <div class="form">
                <el-form ref="form" :model="form" :rules="rules" label-width="0px">
                    <el-form-item prop="username">
                        <el-input
                            v-model="form.username"
                            placeholder="请输入用户名"
                            clearable
                            prefix-icon="el-icon-user-solid"
                        />
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                            v-model="form.password"
                            placeholder="请输入密码"
                            clearable
                            prefix-icon="el-icon-lock"
                            type="password"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
    username: '',
    password: '',
})
</script>

<style scoped lang="less">
.login-box {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;

    .content {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title {
            font-size: 20px;
            font-weight: 400;
            margin-bottom: 20px;
            align-self: flex-start;
        }

        .form {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            .el-form-item {
                width: 100%;
            }

            .el-form {
                width: 100%;

                .el-input {
                    height: 50px;
                    border-radius: 20px !important;
                }
            }
        }
    }
}
</style>
