/**
 * 정규식 함수
 */
const Regex = () => {
  /**
   * 이메일 정규식 테스트
   * @param email 이메일
   * @returns 유효한 이메일인지 유무
   */
  const isEmail = (email: string): boolean => {
    const regex = /\S+@\S+\.\S+/u
    return regex.test(email)
  }

  /**
   * 비밀번호 특수문자 포함 8~20자리 정규식 테스트
   * @param password 비밀번호
   * @returns 유효한 비밀번호인지 유무
   */
  const isPassword = (password: string): boolean => {
    const regex = /^(?=.*[A-Za-z])(?=.*[!#$%*+=@^-])(?=.*\d).{6,}$/u
    return regex.test(password)
  }

  /**
   * 특수기호 정규식 테스트
   * @param text 문자열
   * @returns 특수기호인지 유무
   */
  const isSpecialSymbol = (text: string): boolean => {
    const regex = /^(?=.*[!#$%*+=@^-]).+$/u
    return regex.test(text)
  }

  /**
   * 소문자 정규식 테스트
   * @param text 문자열
   * @returns 소문자 인지 유무
   */
  const isSmallLetter = (text: string): boolean => {
    const regex = /^(?=.*[a-z]).+$/u
    return regex.test(text)
  }

  /**
   * 숫자 정규식 테스트
   * @param text 문자열
   * @returns 숫자 인지 유무
   */
  const isNumber = (text: string): boolean => {
    const regex = /^(?=.*\d).+$/u
    return regex.test(text)
  }

  /**
   * 대문자 정규식 테스트
   * @param text 문자열
   * @returns 대문자 인지 유무
   */
  const isCapitalLetter = (text: string): boolean => {
    const regex = /^(?=.*[A-Z]).+$/u
    return regex.test(text)
  }

  /**
   * 값이 있는지 유무
   * @param str 문자열
   * @returns 값이 있는지 유무
   */
  const hasString = (str: string): boolean => {
    const hasStr = str.length
    return Boolean(hasStr)
  }

  /**
   * (N)자리 이하 문자열 정규식 함수 반환
   * @param minLen 최소 입력 길이
   * @returns 유효한 문자열인지 유무
   */
  const getStringMinLenRegex = (minLen: number) => (str: string) => {
    return str.length >= minLen
  }

  return {
    getStringMinLenRegex,
    hasString,
    isCapitalLetter,
    isEmail,
    isNumber,
    isPassword,
    isSmallLetter,
    isSpecialSymbol,
  }
}

export const {
  isPassword,
  isNumber,
  hasString,
  isEmail,
  getStringMinLenRegex,
  isSpecialSymbol,
  isSmallLetter,
  isCapitalLetter,
} = Regex()
