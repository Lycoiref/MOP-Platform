<template>
    <div class="invoice-card">
        <div class="invoice-card-header">
            <div class="invoice-card-header-left">
                <div class="invoice-card-header-left-title">发票审批</div>
                <div class="invoice-card-header-left-subtitle">2021-08-01</div>
            </div>
            <div class="invoice-card-header-right">
                <div class="invoice-card-header-right-status">待审批</div>
            </div>
        </div>
        <div class="invoice-card-content">
            <div class="invoice-card-content-item">
                <div class="invoice-card-content-item-title">发票类型</div>
                <div class="invoice-card-content-item-content">增值税专用发票</div>
            </div>
            <div class="invoice-card-content-item">
                <div class="invoice-card-content-item-title">发票金额</div>
                <div class="invoice-card-content-item-content">￥1000.00</div>
            </div>
            <div class="invoice-card-content-item">
                <div class="invoice-card-content-item-title">发票抬头</div>
                <div class="invoice-card-content-item-content">北京百度在线网络技术有限公司</div>
            </div>
            <div class="invoice-card-content-item">
                <div class="invoice-card-content-item-title">发票内容</div>
                <div class="invoice-card-content-item-content">服务费</div>
            </div>
            <div class="invoice-card-content-item">
                <div class="invoice-card-content-item-title">发票备注</div>
                <div class="invoice-card-content-item-content">无</div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped lang="less">
.invoice-card {
    width: 80%;
    height: 200px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    .invoice-card-header {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        border-bottom: 1px solid #f5f5f5;

        .invoice-card-header-left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            flex: 1;

            .invoice-card-header-left-title {
                font-size: 16px;
                color: #333;
            }

            .invoice-card-header-left-subtitle {
                font-size: 12px;
                color: #999;
            }
        }

        .invoice-card-header-right {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;

            .invoice-card-header-right-status {
                font-size: 14px;
                color: #66ccff;
            }
        }
    }

    .invoice-card-content {
        width: 100%;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .invoice-card-content-item {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .invoice-card-content-item-title {
                font-size: 14px;
                color: #999;
            }

            .invoice-card-content-item-content {
                font-size: 14px;
                color: #333;
            }
        }
    }
}
</style>
