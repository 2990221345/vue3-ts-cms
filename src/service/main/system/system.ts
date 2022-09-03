import hyRequest from '@/service'
import { IDataType } from '@/service/type'
export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}
// url: /user/id
export function deletePageData(url: string) {
  return hyRequest.delete<IDataType>({
    url
  })
}
