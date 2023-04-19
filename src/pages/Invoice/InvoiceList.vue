<template>
    <div class="page">
        <MobileHeader></MobileHeader>
        <InvoiceCard></InvoiceCard>
        <InvoiceCard></InvoiceCard>
        <InvoiceCard></InvoiceCard>
        <InvoiceCard></InvoiceCard>
        <div class="add">
            <div class="add_icon" @click="addInvoice">
                <el-icon><Plus /></el-icon>
            </div>
            新增发票审批
        </div>
    </div>
</template>

<script setup>
import InvoiceCard from '@/components/InvoiceCard.vue'
import MobileHeader from '@/components/MobileHeader.vue'
import { Plus } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const addInvoice = () => {
    router.push('/invoice/add')
}
</script>

<style scoped lang="less">
.page {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .add {
        position: fixed;
        right: 20px;
        bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #66ccff;
    }

    .add_icon {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-bottom: 10px;
        background-color: #66ccff;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
    }
}
</style>
