<template>
    <div class="header" @click="router.go(-1)">
        <el-icon :size="25" color="#ffffff">
            <Back></Back>
        </el-icon>
    </div>
</template>

<script setup>
import { Back } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

let router = useRouter()
</script>

<style scoped lang="less"></style>
