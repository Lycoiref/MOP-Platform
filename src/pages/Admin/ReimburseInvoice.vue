<template>
    <div class="page">
        <MobileHeader />
        <div class="menu">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                :ellipsis="false"
                @select="handleSelect"
            >
                <el-menu-item index="1">待审批</el-menu-item>
                <el-menu-item index="2">已审批</el-menu-item>
            </el-menu>
            <div v-if="activeIndex === '1'" class="card-content waiting">
                <InvoiceCard />
                <InvoiceCard />
                <InvoiceCard />
                <InvoiceCard />
            </div>
            <div v-if="activeIndex === '2'" class="card-content waiting">
                <InvoiceCard :card-info="testInfo" />
            </div>
        </div>
    </div>
</template>

<script setup>
import InvoiceCard from '../../components/Admin/InvoiceCard.vue'
import MobileHeader from '../../components/MobileHeader.vue'
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    activeIndex.value = key
    console.log(key, keyPath)
}
const testInfo = ref({
    name: '刘宇飞',
    date: '2023-5-7',
    info: '啊————（听不见催稿哦）',
    cost: '9999999.00',
    status: '2',
})
</script>

<style scoped lang="less">
.menu {
    margin-top: 10px;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;

    :deep(.el-menu) {
        width: 80%;
        border: 0;
        display: flex;
        justify-content: space-around;
    }

    .card-content {
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>
