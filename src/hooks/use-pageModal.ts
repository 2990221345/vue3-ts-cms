import { ref } from 'vue'
import PageModal from '@/components/page-modal'

export function usePageModal() {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const hanleNewData = () => {
    if (pageModalRef.value) pageModalRef.value.DialogVisible = true
  }
  const hanleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) pageModalRef.value.DialogVisible = true
    console.log(item)
  }
  console.log('usepagemodal')
  return [pageModalRef, defaultInfo, hanleNewData, hanleEditData]
}
