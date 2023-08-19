import { http } from "@/utils/http"
import type { PageParams } from '@/types/global'
import type { HotResult } from "@/types/hot"

type HotParams = PageParams & { subType?: string }
/**
 *
 * @param url 请求地址
 * @param data 请求参数
 */
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
