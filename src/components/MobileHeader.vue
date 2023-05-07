<template>
    <div class="header">
        <el-icon :size="25" color="#ffffff" @click="router.go(-1)">
            <Back></Back>
        </el-icon>
    </div>
</template>

<script setup>
import { Back } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

let router = useRouter()
</script>

<style scoped lang="less">
.header {
    --padding-left-width: 20px;
    width: calc(100% - var(--padding-left-width));
    height: 50px;
    background-color: rgb(87, 168, 255);
    display: flex;
    align-items: center;
    padding-left: var(--padding-left-width);
}

.header > .el-icon {
    font-weight: bolder;
}
</style>
