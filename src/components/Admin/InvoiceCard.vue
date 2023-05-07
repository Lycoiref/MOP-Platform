<template>
    <div class="invoice-card">
        <div class="header">
            <div class="header-left">
                <div class="header-left-title">员工：{{ props.cardInfo.name }}</div>
            </div>
            <div class="header-right">
                <div v-if="props.cardInfo.status === '1'" class="status status-waiting">审批状态：待审批</div>
                <div v-else-if="props.cardInfo.status === '2'" class="status status-done">审批状态：已审批</div>
                <!-- <div v-else-if="props.cardInfo.status === 3" class="status">审批状态：待审批</div> -->
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <div class="content-item-title">申请日期：</div>
                <div class="content-item-content">{{ props.cardInfo.date }}</div>
            </div>
            <div class="content-item">
                <div class="content-item-title">报销说明：</div>
                <div class="content-item-content">{{ props.cardInfo.info }}</div>
            </div>
            <div class="content-item">
                <div class="content-item-title">税额总计：</div>
                <div class="content-item-content">{{ props.cardInfo.cost }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    cardInfo: {
        type: Object,
        default: () => {
            return {
                name: '张三',
                date: '2023-5-01',
                info: '出差报销',
                cost: '1000',
                status: '1',
            }
        },
    },
})
</script>

<style scoped lang="less">
.invoice-card {
    width: 80%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    overflow: hidden;

    .header {
        height: 40px;
        width: 90%;
        display: flex;
        justify-content: center;
        padding: 0 20px;
        border-bottom: 1px solid #f5f5f5;

        .header-left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            flex: 1;

            .header-left-title {
                font-size: 16px;
                color: #333;
            }
        }

        .header-right {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex: 1;

            .status {
                font-size: 14px;
                color: #66ccff;
                font-weight: bolder;
            }

            .status-waiting {
                color: #d64a27;
            }

            .status-done {
                color: #66ccff;
            }
        }
    }

    display: flex;
    align-items: center;
    flex-direction: column;

    .content {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .content-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 30px;

            .content-item-title {
                font-size: 14px;
                color: #999;
            }

            .content-item-content {
                font-size: 14px;
                color: #333;
            }
        }
    }
}
</style>
