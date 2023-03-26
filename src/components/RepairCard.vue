<!-- 维修历史卡片 -->
<template>
    <div class="card-body">
        <div class="content">
            <div class="topline inline">
                <div class="username">报修人：{{ repairData.name }}</div>
                <div v-if="repairData.status === 0" class="status" :class="`status_${repairData.status}`">
                    订单状态：未处理
                </div>
                <div v-else-if="repairData.status === 1" class="status" :class="`status_${repairData.status}`">
                    订单状态：待评价
                </div>
            </div>
            <div class="inline">
                <div class="orderId">报修单号：{{ repairData.orderId }}</div>
            </div>
            <div class="equipmentName">设备名称：{{ repairData.equipmentName }}</div>
            <div class="address">报修地址：{{ repairData.address }}</div>
            <div class="reason">报修原因：{{ repairData.reason }}</div>
            <div class="time">报修时间：{{ repairData.time }}</div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
    repairData: {
        type: Object,
        default() {
            return {
                name: '张三',
                title: '1111',
                orderId: 1234643325723,
                equipmentName: '丑的空调',
                address: '杭州电子科技大学下沙校区生活区5号楼',
                reason: '空调制冷效果差',
                time: '2021年05月01日',
                status: 1,
            }
        },
    },
})

let repairData = ref(props.repairData)
</script>

<style scoped lang="less">
.card-body {
    width: 80vw;
    height: 45vw;
    margin-top: 20px;
    border-radius: 10px;
    font-size: 14px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
        width: 90%;
        height: 100%;

        .topline {
            font-size: 16px;
            font-weight: 1000;
            display: flex;
            align-items: center;
            margin-top: 10px;
            margin-bottom: 18px;

            .status {
                font-size: 14px;
            }
            .status_0 {
                color: #f00;
            }
            .status_1 {
                color: #66ccff;
            }
        }
    }
    .inline {
        display: flex;
        justify-content: space-between;
    }
}
</style>
