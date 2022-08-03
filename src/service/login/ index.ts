import hyRequest from '../index'
import { IAccount, ILoginResult } from './type'
import { IDataType } from '../type'
// 枚举
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', //用法：/user/1
  UserMenus = '/role/' //用法：role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestLoginUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function requestUserMenusByIdRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
