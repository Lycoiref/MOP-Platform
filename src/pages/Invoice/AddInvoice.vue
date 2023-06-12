<template>
    <div class="page">
        <MobileHeader title="发票报销"></MobileHeader>
        <div class="content">
            <div class="invoice-box input">
                <el-form :model="form" label-width="100px">
                    <el-form-item label="销售方名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="报销日期">
                        <el-date-picker
                            v-model="form.date"
                            type="date"
                            placeholder="选择日期"
                            value-format="yyyy-MM-dd"
                        ></el-date-picker>
                    </el-form-item>
                    <el-form-item label="税价合计">
                        <el-input v-model="form.money"></el-input>
                    </el-form-item>
                    <el-form-item label="发票代码">
                        <el-input v-model="form.invoiceId"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="invoice-box">
                <!-- 上传图片 -->
                <div class="upload-box">
                    <el-upload action="#" list-type="picture-card" :auto-upload="false" class="upload">
                        <el-icon><Plus /></el-icon>

                        <template #file="{ file }">
                            <div>
                                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                                <span class="el-upload-list__item-actions">
                                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
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
            </div>
            <el-button class="btn" type="primary" round>发起报销</el-button>
        </div>
    </div>
</template>

<script setup>
import MobileHeader from '@/components/MobileHeader.vue'
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
import { ref } from 'vue'

const form = ref({
    name: '',
    date: '',
    money: '',
    invoiceId: '',
})

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
</script>

<style scoped lang="less">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .invoice-box {
        width: 95%;
        margin: 20px 0 0 0;
        padding: 20px 0;
        border: 1px solid #66ccff;
        border-radius: 15px;
        display: flex;

        &.input {
            justify-content: center;
        }

        .el-form {
            width: 90%;
        }

        .upload-box {
            margin: 20px;
        }
    }

    .btn {
        margin-top: 20px;
    }
}
</style>
