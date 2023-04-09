<template>
    <div class="page">
        <MobileHeader></MobileHeader>
        <InvoiceCard></InvoiceCard>
        <InvoiceCard></InvoiceCard>
        <InvoiceCard></InvoiceCard>
        <InvoiceCard></InvoiceCard>
    </div>
</template>

<script setup>
import InvoiceCard from '../components/InvoiceCard.vue'
import MobileHeader from '../components/MobileHeader.vue'
</script>

<style scoped lang="less">
.page {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
