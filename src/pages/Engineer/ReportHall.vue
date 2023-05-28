<!-- 工单大厅 -->
<template>
    <div class="page">
        <MobileHeader title="工单大厅" />
        <div class="body">
            <ReportHallCard />
            <ReportHallCard />
            <ReportHallCard />
            <ReportHallCard />
        </div>
    </div>
</template>

<script setup>
import ReportHallCard from '../../components/Engineer/ReportHallCard.vue'
import MobileHeader from '../../components/MobileHeader.vue'
</script>

<style scoped lang="less">
.body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
