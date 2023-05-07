<template>
    <div class="mask">
        <div class="mark-box">
            <div class="title line">服务评价</div>
            <div class="level line">
                服务等级：
                <div v-for="index in 5" :key="index" class="stars">
                    <el-icon
                        v-if="index <= starCount"
                        :key="index"
                        :size="30"
                        color="#66ccff"
                        @click="selectStar(index)"
                        ><StarFilled
                    /></el-icon>
                    <el-icon v-else :size="30" color="#cccccc" @click="selectStar(index)"><Star /></el-icon>
                </div>
            </div>
            <div class="advice">
                <el-input
                    v-model="evaluation"
                    placeholder="请对本次服务过程进行评价"
                    type="textarea"
                    :rows="4"
                ></el-input>
            </div>
            <div class="submit-line line">
                <el-button type="primary" @click="submitMark">提交</el-button>
                <el-button @click="router.push('/')">放弃</el-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { StarFilled, Star } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const evaluation = ref('')
const starCount = ref(0)

const submitMark = () => {
    router.push('/')
}

const selectStar = (index) => {
    starCount.value = index
}
</script>

<style scoped lang="less">
.mask {
    position: fixed;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    // pointer-events: none;

    .mark-box {
        height: 260px;
        width: 80%;
        border-radius: 15px;
        background-color: #fff;
        box-shadow: 0 0 10px #f3f3f3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        // 全局配置置顶
        .line {
            width: 100%;
            height: 20%;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }

        .title {
            width: 70%;
            border: 0 solid #b1b1b1;
            border-width: 0 0 2px 0;
            font-weight: bolder;
        }

        .level {
            justify-content: flex-start;
            width: 80%;
        }

        .advice {
            height: 40%;
            width: 80%;
            display: flex;
            align-items: center;
        }
    }

    .submit-line {
        width: 60%;
        display: flex;
        justify-content: space-around;
    }
}
</style>
