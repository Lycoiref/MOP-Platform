<template>
    <div class="page">
        <qr-stream class="mb" @decode="onDecode"></qr-stream>
        <div class="result">Result: {{ data }}</div>
    </div>
</template>

<script setup>
import { QrStream } from 'vue3-qr-reader'
import { ref } from 'vue'

const state = ref({
    data: null,
})

function onDecode(data) {
    state.value.data = data
}
</script>

<style scoped lang="less"></style>
