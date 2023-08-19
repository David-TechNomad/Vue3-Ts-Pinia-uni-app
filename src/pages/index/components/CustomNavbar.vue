<script setup lang="ts">
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>
<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <!-- logo 文字 -->
    <view class="logo">
      <image src="@/static/images/logo.png" class="logo-image" />
      <text class="logo-text">新鲜 · 亲民 · 快捷</text>
    </view>
    <!-- 搜索条 -->
    <view class="search">
      <text class="icon-search">搜索商品</text>
      <text class="icon-scan"></text>
    </view>
  </view>
</template>

<style lang="scss">
// 自定义banner
.navbar {
  background-image: url(@/static/images/navigator_bg.png);
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  .logo {
    display: flex;
    align-items: center;
    height: 64rpx;
    padding-left: 30rpx;
    .logo-image {
      width: 166rpx;
      height: 39rpx;
    }
    .logo-text {
      flex: 1;
      line-height: 28rpx;
      color: #ffffff;
      margin: 2rpx 0 0 20rpx;
      padding-left: 20rpx;
      border-left: 1rpx solid #ffffff;
      font-size: 26rpx;
    }
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rpx 0 26rpx;
    height: 64rpx;
    margin: 16rpx 20rpx;
    color: #ffffff;
    font-size: 28rpx;
    border-radius: 28rpx;
    background-color: rgba(225, 225, 225, 0.5);
    .icon-search {
      &::before {
        margin-right: 10rpx;
      }
    }
    .icon-scan {
      font-size: 30rpx;
      padding: 15rpx;
    }
  }
}
</style>
