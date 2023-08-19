import type { GoodsItem, PageResult } from "./global"

/** 子类选项 */
export type SubTypesItem = {
  /** 子类id  */
  id: string
  /** 子类标题 */
  title: string
  /** 子类对应的商品集合 */
  goodsItems: PageResult<GoodsItem>
}

/** 热门推荐 */
export type HotResult = {
  /** id 信息 */
  id: string
  /** 活动图片 */
  bannerPicture: string
  /** 活动标题 */
  title: string
  /** 子类选项 */
  subTypes: SubTypesItem[]
}
