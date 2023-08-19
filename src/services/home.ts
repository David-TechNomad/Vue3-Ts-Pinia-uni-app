import type { PageParams, PageResult } from "@/types/global"
import type { BannerItem, CategoryItem, GuessItem, HotItem } from "@/types/home"
import { http } from "@/utils/http"

/**
 * 首页-广告区域
 * @param disributionSite 广告投放位置(1 首页， 2 分类商品页)
 */
export const getHomeBannerApi = (disributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      disributionSite,
    },
  })
}

/**
 * 首页-前台分类
 */
export const getHomeCategoryApi = (disributionSite = 1) => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

/**
 * 首页-热门推荐
 */
export const getHomeHotApi = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

/**
 * 猜你喜欢
 */
export const getHomeGoodsGuessLikeApi = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
