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
                <el-menu-item index="0">LOGO</el-menu-item>
                <el-menu-item index="1">Processing Center</el-menu-item>
            </el-menu>
            <InvoiceCard />
            <InvoiceCard />
            <InvoiceCard />
            <InvoiceCard />
            <InvoiceCard />
        </div>
    </div>
</template>

<script setup>
import InvoiceCard from '../../components/Admin/InvoiceCard.vue'
import MobileHeader from '../../components/MobileHeader.vue'
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
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
}
</style>
