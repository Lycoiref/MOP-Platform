<script setup>
import { getCurrentInstance } from 'vue'

// console.log(this.$route)
const checkDevice = () => {
    const ua = navigator.userAgent
    const ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
    const isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)
    const isAndroid = ua.match(/(Android)\s+([\d.]+)/)
    const isMobile = isIphone || isAndroid
    return isMobile
}

getCurrentInstance().appContext.config.globalProperties.mobile = checkDevice()

// 监听navigator.userAgent变化
window.addEventListener('resize', () => {
    getCurrentInstance().appContext.config.globalProperties.mobile = checkDevice()
})
</script>

<template>
    <div class="page">
        <router-view />
    </div>
</template>

<style scoped>
.page {
    width: 100vw;
    height: 100vh;
}
</style>
