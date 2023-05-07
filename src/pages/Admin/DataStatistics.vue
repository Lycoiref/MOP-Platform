<template>
    <div class="page">
        <MobileHeader />
        <div class="order">
            <div class="title">订单数量统计</div>
            <!-- 柱状图 -->
            <div ref="barChart" class="bar-chart charts"></div>
            <div ref="lineChart" class="line-chat charts"></div>
            <div class="select-bar"></div>
        </div>
        <div class="equipment" @contextmenu="(e) => e.preventDefault()">
            <div class="title">维修设备类型分布</div>
            <div ref="pieChart" class="pie-chart charts"></div>
        </div>
    </div>
</template>

<script setup>
import * as echarts from 'echarts'
import MobileHeader from '../../components/MobileHeader.vue'
import { ref, onMounted } from 'vue'

const barChart = ref(null)
const lineChart = ref(null)
const pieChart = ref(null)
onMounted(() => {
    const barChartInstance = echarts.init(barChart.value)
    const lineChartInstance = echarts.init(lineChart.value)
    const pieChartInstance = echarts.init(pieChart.value)
    barChartInstance.setOption({
        // title: {
        //     text: '订单数量统计',
        // },
        tooltip: {},
        legend: {
            data: ['订单数量'],
        },
        xAxis: {
            data: ['1月', '2月', '3月', '4月', '5月', '6月'],
        },
        yAxis: {},
        series: [
            // 在bar的顶部显示数值
            {
                name: '订单数量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20],
                label: {
                    show: true,
                    position: 'top',
                },
            },
        ],
    })
    lineChartInstance.setOption({
        // title: {
        //     text: '订单数量统计',
        // },
        tooltip: {},
        legend: {
            data: ['增长率'],
        },
        xAxis: {
            data: ['1月', '2月', '3月', '4月', '5月', '6月'],
        },
        yAxis: {},
        series: [
            {
                name: '增长率',
                type: 'line',
                data: [10, 20, 30, 40, 50, 60],
            },
        ],
    })
    pieChartInstance.setOption({
        // title: {
        //     text: '订单数量统计',
        // },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
            // 选中后突出显示
            showContent: true,
        },
        legend: {
            data: ['类型1', '类型2', '类型3', '类型4', '类型5'],
        },
        series: [
            {
                name: '维修设备类型',
                type: 'pie',
                radius: ['30%', '60%'],
                data: [
                    { value: 335, name: '类型1' },
                    { value: 310, name: '类型2' },
                    { value: 234, name: '类型3' },
                    { value: 135, name: '类型4' },
                    { value: 1548, name: '类型5' },
                ],
            },
        ],
    })
})
</script>

<style scoped lang="less">
.page {
    width: 100vw;

    .charts {
        width: 100vw;
        height: 75vw;
    }

    .pie-chart {
        height: 100vw;
    }

    .title {
        margin: 15px;
        font-size: 15px;
        font-weight: bolder;
    }
}
</style>
