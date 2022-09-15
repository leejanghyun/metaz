import {AxiosRequestConfig, AxiosRequestHeaders} from 'axios'

export const baseURL = 'http://playground-719591487.us-west-2.elb.amazonaws.com'

/** 공통 요청 헤더 */
export interface CommonRequestHeader {
  Accept: string
  Authorization: string
  'Content-Type': string
}

/** 공통 요청 Config 설정 타입 */
export interface CommonRequestConfig extends AxiosRequestConfig {
  // error 메시지 창 띄우는지 유무
  authRequired?: boolean
  // Email 필수 여부
  canceler?: (message?: string) => void
  doNotShowSpinner?: boolean
  headers?: AxiosRequestHeaders // Access Token 필요 유무
  isEmailRequired?: boolean
  // spinner 노출 유무
  skipAlert?: boolean
}

const AuthRqeuiredCode = 401
const SuccessCode = 200
const MultipleChoicesCode = 300

/** Status Code 값 */
export enum StatusCode {
  AuthRqeuired = AuthRqeuiredCode,
  Success = SuccessCode,
  MultipleChoices = MultipleChoicesCode,
}

/** Rest Api Method */
export const enum Method {
  Delete = 'delete',
  Get = 'get',
  Patch = 'patch',
  Post = 'post',
  Put = 'put',
}

/** 응답 코드 값 */
export enum CodeType {
  NO_DATA = 'NO_DATA',
  SUCCESS = 'SUCCESS',
}

/** 공통 응답 타입 */
export type CommonResponse = {
  code: CodeType
  detail: string
}

const MAX_TIMEOUT = 6000 // Timeout (Max:6초)

/**
 * Default Config 설정 객체 반환
 * @returns Default Config 설정 객체 반환
 */
export const getDefaultConfig = (): CommonRequestConfig => {
  return {
    authRequired: true,
    baseURL,
    doNotShowSpinner: false,
    headers: {
      Accept: 'application/json',
    },
    skipAlert: false,
    timeout: MAX_TIMEOUT,
    validateStatus: function (status) {
      return StatusCode.Success <= status && status < StatusCode.MultipleChoices
    },
  }
}
