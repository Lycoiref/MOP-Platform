<template>
    <div class="page">
        <qr-stream class="mb" @decode="onDecode"></qr-stream>
        <!-- <div class="result">Result: {{ qrcode }}</div> -->
    </div>
</template>

<script setup>
import { QrStream } from 'vue3-qr-reader'
import { useRouter } from 'vue-router'
// import { ref } from 'vue'

// const qrcode = ref('')
const router = new useRouter()

function onDecode(data) {
    // qrcode.value = data
    // 判断data是否是数字
    if (isNaN(data)) {
        alert('请扫描正确的二维码')
        return
    }
    router.push(`/user/report/${data}`)
}
</script>

<style scoped lang="less"></style>
