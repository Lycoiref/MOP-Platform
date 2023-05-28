<template>
    <div class="card">
        <div class="line title">
            <div class="label">报修人：</div>
            <div class="value">{{ report.name }}</div>
        </div>
        <div class="line double-box">
            <div class="box">
                <div class="label">订单号：</div>
                <div class="value">{{ report.id }}</div>
            </div>
            <div class="box">
                <div class="label">设备名称：</div>
                <div class="value">{{ report.equipment }}</div>
            </div>
        </div>
        <div class="line">
            <div class="label">报修地址：</div>
            <div class="value">{{ report.address }}</div>
        </div>
        <div class="line">
            <div class="label">报修说明：</div>
            <div class="value">{{ report.description }}</div>
        </div>
        <div class="line">
            <div class="label">发起时间：</div>
            <div class="value">{{ report.time }}</div>
            <div class="grab-report">
                <el-button type="primary" size="small" round @click="router.push(`/engineer/report/${report.id}`)"
                    >抢单</el-button
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
defineProps({
    report: {
        type: Object,
        default: () => {
            return {
                id: 123456,
                equipment: '某某空调',
                name: '张三',
                time: '2023年3月19日',
                address: '杭州电子科技大学下沙校区生活区1号楼101',
                description: '空调不制冷',
            }
        },
    },
})
</script>

<style scoped lang="less">
.card {
    position: relative;
    margin: 10px 0;
    width: 90vw;
    box-shadow: 0 0 10px #ccc;
    border-radius: 15px;
    padding: 10px 0;

    .line {
        width: 95%;
        display: flex;
        font-size: 12px;
        margin: 5px 10px;

        &.title {
            font-size: 14px;
            font-weight: bold;
        }

        &.double-box {
            display: flex;
            justify-content: space-between;

            .box {
                display: flex;
            }
        }
    }

    .grab-report {
        position: absolute;
        right: 15px;
        bottom: 15px;

        :deep(.el-button) {
            width: 80px;
            height: 30px;
            font-weight: bolder;
        }
    }
}
</style>
