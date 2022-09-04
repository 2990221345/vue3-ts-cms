import { ILoginState } from './login/type'
export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
}

export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
