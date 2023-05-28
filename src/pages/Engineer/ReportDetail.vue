<template>
    <div class="page">
        <MobileHeader title="工单详细"></MobileHeader>
        <div class="detail-box">
            <div class="line">
                <div class="title">
                    <div class="title-block"></div>
                    工单报修信息
                </div>
            </div>
            <div class="line">
                <div class="item-name">工单编号：</div>
                <div class="item-value">{{ details.orderId }}</div>
            </div>
            <div class="line">
                <div class="item-name">设备类型：</div>
                <div class="item-value">{{ details.type }}</div>
            </div>
            <div class="line">
                <div class="item-name">维修地点：</div>
                <div class="item-value">{{ details.address }}</div>
            </div>
            <div class="line">
                <div class="item-name">期望上门时间：</div>
                <div class="item-value">{{ details.time }}</div>
            </div>
            <div class="line">
                <div class="item-name">报修说明：</div>
                <div class="item-value">{{ details.reason }}</div>
            </div>
            <div class="line">
                <div class="item-name">附件：</div>
                <div class="item-value"></div>
            </div>
        </div>
        <div class="detail-box">
            <div class="line">
                <div class="title">
                    <div class="title-block"></div>
                    保修设备详细信息
                </div>
            </div>
            <div class="line">
                <div class="item-name">设备名称：</div>
                <div class="item-value">{{ details.equipmentName }}</div>
            </div>
            <div class="line">
                <div class="item-name">设备编号：</div>
                <div class="item-value">{{ details.equipmentId }}</div>
            </div>
            <div class="line">
                <div class="item-name">设备位置信息：</div>
                <div class="item-value">{{ details.address }}</div>
            </div>
        </div>
        <div class="detail-box">
            <div class="line">
                <div class="title">
                    <div class="title-block"></div>
                    报修人信息
                </div>
            </div>
            <div class="line">
                <div class="item-name">报修人：</div>
                <div class="item-value">{{ details.name }}</div>
            </div>
            <div class="line">
                <div class="item-name">联系电话：</div>
                <div class="item-value">{{ details.phone }}</div>
            </div>
        </div>
        <div v-if="details.status === '1'" class="button-line">
            <el-button class="button" round @click="router.push('/')">返回</el-button>
            <el-button class="button" type="primary" round @click="router.push('/')">处理完成</el-button>
        </div>
        <div v-if="details.status === '0'" class="button-line">
            <el-button class="button" round @click="router.go(-1)">返回</el-button>
            <el-button class="button" type="primary" round @click="router.push('/')">接单</el-button>
        </div>
    </div>
</template>

<script setup>
import MobileHeader from '../../components/MobileHeader.vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const defaultValue = {
    name: '张三',
    phone: 15636354355,
    title: '1111',
    orderId: 1234643325723,
    equipmentName: '丑的空调',
    equipmentId: 123456789,
    type: '空调',
    address: '浙江省杭州市江干区杭州电子科技大学下沙校区生活区5号楼',
    reason: '空调制冷效果差',
    time: '2021年05月01日',
    status: '1',
}

let details = defaultValue
// 获取路由id
const id = route.params.id
console.log(id)
// 获取query参数
details.status = route.query.status || '1'
</script>

<style scoped lang="less">
.page {
    width: 100vw;
    height: 100vh;

    .detail-box {
        width: 80vw;
        margin: 0 auto;
        margin-top: 20px;
        padding: 20px;
        border: 1px solid #66ccff;
        border-radius: 10px;

        .title-block {
            width: 5px;
            height: 20px;
            background-color: #66ccff;
            margin-right: 10px;
        }

        .title {
            font-size: 14px;
            font-weight: bold;
            display: flex;
        }

        .line {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 10px;
            font-size: 12px;

            .item-name {
                width: 120px;
            }

            .item-value {
                font-weight: bold;
                width: 50%;
                text-align: right;
            }
        }
    }

    .button-line {
        position: absolute;
        bottom: 30px;
        width: 100%;
        display: flex;
        justify-content: center;

        .button {
            margin: 20px;
            width: 150px;
            height: 40px;
        }
    }
}
</style>
