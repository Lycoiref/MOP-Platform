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

<style scoped lang="less"></style>
