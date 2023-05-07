<template>
    <div class="customer-card">
        <div class="name">姓名：{{ props.cardInfo.name }}</div>
        <div class="phone text">电话：{{ props.cardInfo.phone }}</div>
        <div class="address text">地址：{{ props.cardInfo.address }}</div>
        <div class="history text">历史订单数据：{{ props.cardInfo.history }}单</div>
    </div>
</template>

<script setup>
const props = defineProps({
    cardInfo: {
        type: Object,
        default: () => {
            return {
                name: '张三',
                phone: '12345678910',
                address: '浙江省杭州市杭州电子科技大学',
                history: 5,
            }
        },
    },
})
</script>

<style scoped lang="less">
.customer-card {
    width: 90vw;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 10px;

    .name {
        font-size: 14px;
        font-weight: bolder;
        margin: 10px;
    }

    .text {
        font-size: 12px;
        margin: 10px;
    }
}
</style>
