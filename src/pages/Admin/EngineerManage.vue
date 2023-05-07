<template>
    <div class="page">
        <MobileHeader />
        <div class="filter">
            <div class="search-box">
                <el-input v-model="searchParam" class="w-50 m-20" placeholder="搜索" :suffix-icon="Search" />
            </div>
            <div class="choose-box">
                <el-select v-model="sortWay" class="selector" placeholder="排序方式">
                    <el-option v-for="item in sortOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-select v-model="filterValue" class="selector" placeholder="筛选">
                    <el-option
                        v-for="item in filterOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </div>
        </div>
        <div class="count-line">
            <div class="text-flow"></div>
            共{{ dataCount }}条数据
        </div>
        <div class="card-content">
            <EngineerCard v-for="index in 10" :key="index" />
            <EngineerCard :card-info="testInfo" />
        </div>
    </div>
</template>

<script setup>
import MobileHeader from '../../components/MobileHeader.vue'
import EngineerCard from '../../components/Admin/EngineerCard.vue'
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const dataCount = ref(35)
const searchParam = ref()
const sortWay = ref()
const filterValue = ref()
const sortOptions = [
    {
        value: '姓名排序',
        label: '姓名排序',
    },
    {
        value: '订单数排序',
        label: '订单数排序',
    },
]
const filterOptions = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
]

const testInfo = {
    name: '刘宇飞',
    engineerId: 114514,
}
</script>

<style scoped lang="less">
.page {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .filter {
        width: 100vw;
        height: 10vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;

        .search-box {
            width: 90vw;
            height: 6vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
        }

        .choose-box {
            display: flex;
            justify-content: space-around;

            .selector {
                width: 40%;
            }
        }
    }

    .count-line {
        margin: 5px 0;
        width: 100vw;
        height: 25px;
        font-size: 12px;
        display: flex;
        align-items: center;
        color: #9c9c9c;
        background-color: #eeeeee;

        .text-flow {
            width: 10px;
        }
    }

    .card-content {
        width: 100vw;
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: scroll;
    }
    .bottom-flow {
        .flow {
            height: 20px;
        }
    }
}
</style>
