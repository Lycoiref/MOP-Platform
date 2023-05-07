<template>
    <div class="engineer-card">
        <div class="user-head"></div>
        <div class="user-info">
            <div class="info-line">
                <div class="name">{{ props.cardInfo.name }}</div>
                <div class="engineer-id">工号：{{ props.cardInfo.engineerId }}</div>
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
                engineerId: '12345678910',
            }
        },
    },
})
</script>

<style scoped lang="less">
.engineer-card {
    width: 90vw;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 10px;
    display: flex;
    align-items: center;
    padding: 10px;

    .user-head {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #eee;
        margin-right: 10px;
    }

    .user-info {
        height: 100%;
        width: calc(~'100% - 60px');
        display: flex;
        flex-direction: column;

        .info-line {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;

            .name {
                font-size: 14px;
                font-weight: bolder;
            }

            .engineer-id {
                font-size: 12px;
            }
        }
    }
}
</style>
