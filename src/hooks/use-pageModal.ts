import { ref } from 'vue'
import PageModal from '@/components/page-modal'
type CallbackFn = () => void
export function usePageModal(newCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const hanleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) pageModalRef.value.DialogVisible = true
    newCb && newCb()
  }
  const hanleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) pageModalRef.value.DialogVisible = true
    editCb && editCb()
  }
  return [pageModalRef, defaultInfo, hanleNewData, hanleEditData]
}
