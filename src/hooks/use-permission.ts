import { useStore } from '@/store'
export function usePermission(pageName: string, hanldeName: string): boolean {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${hanldeName}`
  return !!permissions.find((item) => item === verifyPermission)
}
