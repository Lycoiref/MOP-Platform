<template>
    <div class="page">
        <MobileHeader></MobileHeader>
        <div class="title">
            <!-- 维修人行 -->
            <div class="engineer">
                <el-avatar :icon="UserFilled" :size="60" />
                维修人
            </div>
            <div class="repairId">
                <!-- 订单编号 -->
                订单编号：241241124
            </div>
        </div>
        <div class="steps">
            <el-steps :active="0" finish-status="success" align-center>
                <el-step title="待接单" />
                <el-step title="待维修" />
                <el-step title="待评价" />
                <el-step title="已完成" />
            </el-steps>
        </div>
        <MarkBox />
    </div>
</template>

<script setup>
import MobileHeader from '../components/MobileHeader.vue'
import MarkBox from '../components/MarkBox.vue'
import { UserFilled } from '@element-plus/icons-vue'
</script>

<style scoped lang="less">
.page {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: start;
    background-color: #f7f7f7;
}
.title {
    width: 90%;
    height: 10%;
    font-size: 18px;
    font-weight: 400;
    border: 0 solid #b1b1b1;
    border-width: 0 0 2px 0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .engineer {
        display: flex;
        align-items: flex-end;

        .el-avatar {
            margin-right: 10px;
            font-size: 30px;
        }
    }
}

.steps {
    width: 100%;
    margin: 20px 0;
}
</style>
