/**
 * 뮨자열을 hash code로 변환
 * @param str 문자열
 * @returns 숫자 hashCode값
 */
export const hashCode = (str: string): number => {
  let hash = 0
  const {length} = str
  const tempNum = 31

  for (let integer = 0; integer < length; integer += 1) {
    hash = Math.imul(tempNum, hash) + str.codePointAt(integer)
  }

  return hash
}

/**
 * 객체에 해당 속성이 있는지 유무
 * @returns 객체에 해당 속성이 있는지 유무
 */
export const hasProperty = <K extends object, V = keyof K>(obj: K, props: string): boolean => {
  return Object.prototype.hasOwnProperty.call(obj, props)
}

/**
 * 문자인지 유무
 * @param value 값
 * @returns 문자인지 유무
 */
export const isStringValue = (value: unknown) => {
  return typeof value === 'string'
}

/**
 * 객체인지 유무
 * @param value 값
 * @returns 객체인지 유무
 */
export const isObjectValue = (value: unknown) => {
  return typeof value === 'object'
}
