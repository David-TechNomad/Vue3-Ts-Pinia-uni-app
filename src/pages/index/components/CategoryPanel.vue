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
      hover-class="none"
      class="category-item"
      v-for="item in list"
      :key="item.id"
      open-type="switchTab"
      :url="`/pages/category/category?active=${item.id}`"
    >
      <image :src="item.icon" class="icon" />
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<style lang="scss">
@import './styles/category.scss';
</style>
