import {baseURL, CommonRequestConfig, Method} from 'src/api'

// url 정보
export const authUtl = '/rest/auth'

/** Sign In 요청 필드 값 */
export type SignInRequestFields = {
  email: string
  password: string
}

/** Sign In 응답 필드 값 */
export type SignInResponseFields = {
  email: string
  name?: string
  token?: string
}

/**
 * Sign In config 객체 반환
 * @returns axios config 객체
 */
export const getSignInConfig = (data: SignInRequestFields): CommonRequestConfig => {
  return {
    authRequired: false,
    baseURL,
    data,
    method: Method.Post,
    url: `${authUtl}/sign-in`,
  }
}

/** Sign Uo 요청 필드 값 */
export type SignUpRequestFields = {
  email: string
  password: string
}

/** Sign Up 응답 필드 값 */
export type SignUpResponseFields = {
  email: string
  name?: string
  token?: string
}

/**
 * Sign Up config 객체 반환
 * @returns axios config 객체
 */
export const getSignUpConfig = (data: SignUpRequestFields): CommonRequestConfig => {
  return {
    authRequired: false,
    baseURL,
    data,
    method: Method.Post,
    url: `${authUtl}/sign-up`,
  }
}

/** Update Password 요청 필드 값 */
export type UpdatePasswordRequestFields = {
  newPassword: string
  password: string
}

/** Update Password 응답 필드 값 */
export type UpdatePasswordResponseFields = {
  email: string
}

/**
 * Update Password config 객체 반환
 * @returns axios config 객체
 */
export const getUpdatePasswordConfig = (data: UpdatePasswordRequestFields): CommonRequestConfig => {
  return {
    authRequired: true,
    baseURL,
    data,
    method: Method.Patch,
    url: `${authUtl}/update-password`,
  }
}
