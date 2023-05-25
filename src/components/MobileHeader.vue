<template>
    <div class="header">
        <el-icon :size="25" color="#ffffff" @click="router.go(-1)">
            <Back></Back>
        </el-icon>
        <div class="title">
            {{ title }}
        </div>
        <div class="flex-grow"></div>
    </div>
</template>

<script setup>
import { Back } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

let router = useRouter()
defineProps({
    title: {
        type: String,
        default: '',
    },
})
</script>

<style scoped lang="less">
.header {
    --padding-left-width: 10px;
    width: calc(100% - var(--padding-left-width));
    height: 50px;
    background-color: rgb(87, 168, 255);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: var(--padding-left-width);

    .title {
        flex: 1;
        font-size: 18px;
        font-weight: bold;
        color: #ffffff;
        display: flex;
        justify-content: center;
    }

    .flex-grow {
        flex: 1;
    }
}

.header > .el-icon {
    display: flex;
    justify-content: flex-start;
    flex: 1;
    font-weight: bolder;
}
</style>
