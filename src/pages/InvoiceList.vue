<template>
    <div class="page">
        <div class="header" @click="router.go(-1)">返回</div>
        <InvoiceCard></InvoiceCard>
        <InvoiceCard></InvoiceCard>
        <InvoiceCard></InvoiceCard>
        <InvoiceCard></InvoiceCard>
    </div>
</template>

<script setup>
import InvoiceCard from '../components/InvoiceCard.vue'
import { useRouter } from 'vue-router'

let router = useRouter()
</script>

<style scoped lang="less">
.page {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header {
        width: 100%;
        height: 50px;
        background-color: rgb(87, 168, 255);
    }
}
</style>
