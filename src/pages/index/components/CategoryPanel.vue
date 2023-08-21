<script setup lang="ts">
import type { CategoryItem } from '@/types/home'

// 定义props
defineProps<{
  list: CategoryItem[]
}>()
</script>

<template>
  <view class="category">
    <navigator
      :url="`/pages/category/category`"
      hover-class="none"
      class="category-item"
      v-for="item in list"
      :key="item.id"
    >
      <image :src="item.icon" class="icon" />
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<style lang="scss">
@import './styles/category.scss';
</style>
