<template>
    <div class="card">
        <div class="content">
            <div class="line">
                <div class="proposer">申请人：{{ props.proposer }}</div>
                <div class="status">状态：已报销</div>
            </div>
            <div class="line">
                <div class="code">发票代码：124124</div>
                <div class="accept">审批人：王五</div>
            </div>
            <div class="line">
                <div class="saler">销售方：OPENAI</div>
            </div>
            <div class="line">
                <div class="tax">税价合计：￥1000</div>
            </div>
            <div class="line">
                <div class="date">开票日期：2023年3月30日</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    proposer: {
        type: String,
        default: '张三',
    },
})
</script>

<style scoped lang="less">
.card {
    width: 80%;
    height: 160px;
    margin-top: 20px;
    // border: 1px solid #000;
    border-radius: 15px;
    box-shadow: 0 0 10px #d6d6d6;
    display: flex;
    align-items: center;

    .line {
        // width: 100%;
        margin: 0 20px;
        height: 20%;
        font-size: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .status {
            color: #00b7ee;
            font-weight: bolder;
        }
    }

    .proposer {
        font-weight: bolder;
        font-size: 18px;
    }

    .content {
        height: 90%;
        width: 100%;
    }
}
</style>
