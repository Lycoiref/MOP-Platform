<template>
    <template v-if="useStore().state.isMobile">
        <div class="mobile-page">
            <MobileHeader></MobileHeader>
            <div class="content">
                <div class="title">
                    <!-- 维修人行 -->
                    <div class="engineer">
                        <el-avatar :icon="UserFilled" :size="60" />
                        维修人
                    </div>
                    <div class="repairId">
                        <!-- 订单编号 -->
                        订单编号：241241124
                    </div>
                </div>
                <div class="steps">
                    <el-steps :active="0" finish-status="success" align-center>
                        <el-step title="待接单" />
                        <el-step title="待维修" />
                        <el-step title="待评价" />
                        <el-step title="已完成" />
                    </el-steps>
                </div>
                <el-form :model="form" label-width="75px" label-position="left">
                    <div class="label">设备信息</div>
                    <el-form-item label="设备名称"> <el-input v-model="form.equipmentName" /></el-form-item>
                    <el-form-item label="设备类型"> <el-input v-model="form.type" /></el-form-item>
                    <el-form-item label="地址"> <el-input v-model="form.address" /></el-form-item>
                    <div class="label">故障描述</div>
                    <el-form-item class="no-underline" label-width="0px">
                        <el-input v-model="form.discription" type="textarea" :rows="4"
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
                    <el-form-item label="姓名"> <el-input v-model="form.name" /></el-form-item>
                    <el-form-item label="电话"> <el-input v-model="form.phone" /></el-form-item>
                    <div class="time">
                        <div class="time-label">预约上门时间</div>
                        <el-date-picker v-model="form.startTime" type="date" placeholder="Pick a day" />
                        <el-date-picker v-model="form.endTime" type="date" placeholder="Pick a day" />
                    </div>
                </el-form>
            </div>
        </div>
    </template>
    <template v-else></template>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { UserFilled } from '@element-plus/icons-vue'
// 图片上传
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
import MobileHeader from '@/components/MobileHeader.vue'

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
    name: '张三',
    phone: '11111444444',
    type: '测试类型',
    equipmentName: '空调',
    address: '基沃托斯夏莱',
    discription: '办公室空调不制冷了',
    startTime: '2023-05-03',
    endTime: '2023-05-15',
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
        flex-direction: column;
        align-items: center;

        .title {
            width: 100%;
            height: 15%;
            margin: 20px 0 0 0;
            font-size: 18px;
            font-weight: 400;
            border: 0 solid #b1b1b1;
            border-width: 0 0 2px 0;
            padding-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;

            .engineer {
                display: flex;
                align-items: flex-end;

                .el-avatar {
                    margin-right: 10px;
                    font-size: 30px;
                }
            }
        }

        // 步骤条
        .steps {
            width: 100%;
            margin: 20px 0;
        }

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
