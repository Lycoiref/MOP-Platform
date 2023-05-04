<template>
    <div class="line">
        <div class="select-box">
            <div class="content">
                <el-icon class="icon" size="80px">
                    <users />
                </el-icon>
            </div>
            <div class="tag">客户管理</div>
        </div>
        <div class="select-box">
            <div class="content">
                <el-icon class="icon" size="80">
                    <engineer />
                </el-icon>
            </div>
            <div class="tag">维修人管理</div>
        </div>
        <div class="select-box" @click="router.push('/admin/reimburse')">
            <div class="content">
                <el-icon class="icon" size="80">
                    <invoice />
                </el-icon>
            </div>
            <div class="tag">发票报销</div>
        </div>
        <div class="select-box">
            <div class="content">
                <el-icon class="icon" size="80">
                    <charPie />
                </el-icon>
            </div>
            <div class="tag">数据统计</div>
        </div>
    </div>
</template>

<script setup>
import users from '../../assets/icons/users.svg'
import engineer from '../../assets/icons/engineer.svg'
import invoice from '../../assets/icons/invoice.svg'
import charPie from '../../assets/icons/chartPie.svg'
import { useRouter } from 'vue-router'

let router = useRouter()
</script>

<style scoped lang="less">
.line {
    width: 100vw;
    height: 25vw;
    display: flex;

    .select-box {
        width: 25vw;
        height: 25vw;
        // background-color: #fff;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .content {
            width: 80%;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .tag {
            color: #fff;
            font-weight: bolder;
        }
    }
}
</style>
