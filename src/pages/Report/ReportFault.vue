<template>
    <template v-if="useStore().state.isMobile">
        <div class="mobile-page">
            <MobileHeader></MobileHeader>
            <div class="content">
                <el-form :model="form" label-width="75px" label-position="left">
                    <div class="label">设备信息</div>
                    <el-form-item label="设备名称"> <el-input v-model="form.equipmentName" /></el-form-item>
                    <el-form-item label="设备类型"> <el-input v-model="form.type" /></el-form-item>
                    <el-form-item label="地址"> <el-input v-model="form.address" /></el-form-item>
                    <div class="label">故障描述</div>
                    <el-form-item class="no-underline" label-width="0px">
                        <el-input v-model="form.address" type="textarea" :rows="4"
                    /></el-form-item>
                    <!-- 上传图片 -->
                    <div class="upload-box">
                        <div class="upload-label">上传图片</div>
                        <el-upload action="#" list-type="picture-card" :auto-upload="false" class="upload">
                            <el-icon><Plus /></el-icon>

                            <template #file="{ file }">
                                <div>
                                    <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                                    <span class="el-upload-list__item-actions">
                                        <span
                                            class="el-upload-list__item-preview"
                                            @click="handlePictureCardPreview(file)"
                                        >
                                            <el-icon><zoom-in /></el-icon>
                                        </span>
                                        <span
                                            v-if="!disabled"
                                            class="el-upload-list__item-delete"
                                            @click="handleDownload(file)"
                                        >
                                            <el-icon><Download /></el-icon>
                                        </span>
                                        <span
                                            v-if="!disabled"
                                            class="el-upload-list__item-delete"
                                            @click="handleRemove(file)"
                                        >
                                            <el-icon><Delete /></el-icon>
                                        </span>
                                    </span>
                                </div>
                            </template>
                        </el-upload>

                        <el-dialog v-model="dialogVisible">
                            <img w-full :src="dialogImageUrl" alt="Preview Image" />
                        </el-dialog>
                    </div>
                    <div class="label">报修人信息</div>
                    <el-form-item label="姓名"> <el-input v-model="form.equipmentName" /></el-form-item>
                    <el-form-item label="电话"> <el-input v-model="form.type" /></el-form-item>
                    <div class="time">
                        <div class="time-label">预约上门时间</div>
                        <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
                        <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
                    </div>
                    <el-button type="primary" size="large" round @click="router.push('/submit')">发起报修</el-button>
                </el-form>
            </div>
        </div>
    </template>
    <template v-else></template>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
// 图片上传
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
import MobileHeader from '@/components/MobileHeader.vue'

let router = useRouter()
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (file) => {
    console.log(file)
}

const handlePictureCardPreview = (file) => {
    dialogImageUrl.value = file.url
    dialogVisible.value = true
}

const handleDownload = (file) => {
    console.log(file)
}

const form = ref({
    name: '',
    type: '',
    title: '',
    orderId: 0,
    equipmentName: '',
    address: '',
    reason: '',
    time: '',
    status: 0,
})
</script>

<style scoped lang="less">
.mobile-page {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;

    .content {
        width: 90vw;
        height: calc(~'100% - 30px');
        display: flex;
        justify-content: center;

        // 设置el-form样式
        .no-underline {
            border: 0 !important;
        }

        .upload-box {
            width: 100%;

            .upload-label {
                margin-top: -10px;
                margin-bottom: 10px;
            }

            :deep(.el-upload) {
                width: 120px;
                height: 120px;
            }
        }

        :deep(.el-form) {
            width: 90%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
        }

        :deep(.el-form-item) {
            width: 95%;
            margin-left: -5px;
            border: solid #b1b1b1;
            border-width: 0 0 2px 0;
        }
        :deep(.el-input) {
            // border: solid #b1b1b1;
            // border-width: 0 0 2px 0;
            margin-left: -10px;
        }

        :deep(.el-input__wrapper) {
            box-shadow: none;
        }
    }

    .label {
        width: 100%;
        height: 30px;
        // color: white;
        padding-left: 10px;
        font-weight: bolder;
        border: solid #66ccff;
        border-width: 0 0 2px 8px;
        margin: 10px 0;
        transform: translateX(-20px);
    }
}
</style>
