import styled from '@emotion/styled'
import {css, SerializedStyles} from '@emotion/react'
import {useRef, useState, Ref, ChangeEvent, useImperativeHandle, forwardRef, PropsWithChildren} from 'react'

// Constants
import {ElementType, InputType, MonoColor, RedColor} from '../../constants/'

// Components
import {Box} from '../Atom/'

/** TextInput 유효성 검사 */
type InputValidator = (value: string) => boolean

/** 컴포넌트 Property */
interface Props {
  placeholder?: string
  styles?: SerializedStyles
  type?: InputType
  value?: string
  max?: number
  warnMessage?: string[]
  guide?: string
  validator?: InputValidator[]
  disabled?: boolean
  onChange?: (value: string) => void
}

/** 컴포넌트 핸들러 */
export type TextInputHandler = {
  isValid: () => boolean
  getValue: () => string
  validateTextInput: () => void
  hasValue: () => boolean
}

/**
 * TextInput 컴포넌트
 * @param props 컴포넌트 프로퍼티
 * @returns TextInput 컴포넌트
 */
export const TextInput = forwardRef<TextInputHandler | undefined, PropsWithChildren<Props>>(
  (
    {
      type = InputType.Text,
      value = '',
      guide = '',
      styles,
      warnMessage,
      max = 30,
      validator = [],
      onChange,
      ...props
    }: Props,
    ref: Ref<TextInputHandler | undefined>,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [message, setMessage] = useState('')
    const [inputType] = useState(type)

    /** 상위 부모에서 호출할 함수 정의 */
    useImperativeHandle(ref as Ref<TextInputHandler>, () => ({
      /** 유효성 검증 */
      isValid: () => {
        const {current} = inputRef
        const {value} = current as HTMLInputElement
        const {length} = validator
        let isValid = true

        if (!length) {
          return false
        }

        for (let i = 0; isValid && i < length; i++) {
          isValid = !!validator?.[i]?.(value)
        }

        return isValid
      },

      /** 값이 있는지 유무 */
      hasValue: () => {
        const {current} = inputRef
        const {value} = current as HTMLInputElement

        return Boolean(value.length)
      },

      /** 텍스트 값 반환 */
      getValue: () => {
        const {current} = inputRef
        const {value} = current as HTMLInputElement

        return value
      },

      /** Input 유효성 검증 */
      validateTextInput: () => {
        const {current} = inputRef
        const {value} = current as HTMLInputElement
        const {length} = validator
        let isValid = true

        for (let i = 0; i < length; i++) {
          if (!warnMessage) {
            return
          }

          isValid = !!validator?.[i]?.(value)

          if (!isValid) {
            const {length} = warnMessage
            setMessage(`${warnMessage[i] || warnMessage[length - 1]}`)
            return
          }
        }

        setMessage('')
      },
    }))

    /**
     * Change 콜백 함수
     * @param event 이벤트 객체
     */
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const {target} = event
      const {value} = target as HTMLInputElement
      const {length} = value

      if (type === InputType.Number && length > max) {
        target.value = value.slice(0, max)
      }

      onChange?.(value)
    }

    return (
      <Box>
        <InputStyled
          type={inputType}
          ref={inputRef}
          maxLength={max}
          defaultValue={value}
          styles={styles}
          onChange={handleInputChange}
          {...props}
        />
        {/** 가이드 문구 */}
        <Box styles={GuideStyled} elementType={ElementType.Paragraph}>
          {guide}
        </Box>

        {/** 경고 메시지 */}
        <Box styles={ErrorStyled} elementType={ElementType.Paragraph}>
          {message}
        </Box>
      </Box>
    )
  },
)

/** Input Style Property */
interface TextInputStyleProps {
  styles?: SerializedStyles
}

/** Input Styled */
const InputStyled = styled.input<TextInputStyleProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 8px;
  height: 48px;
  min-height: 48px;
  background: ${MonoColor.MONO_WHITE};
  border: 1px solid ${MonoColor.MONO_800};
  color: ${MonoColor.MONO_100};
  border-radius: 4px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  font-family: 'Balsamiq Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  flex: none;
  order: 0;
  flex-grow: 1;

  ${(props) => props.styles}
`

/** Guide Css */
const GuideStyled = css`
  font-family: 'Balsamiq Sans';
  font-style: normal;
  font-weight: 400;
  padding: 4px 12px 0px 12px;
  font-size: 12px;
  line-height: 16px;
  color: ${MonoColor.MONO_100};
  flex: none;
  order: 0;
  flex-grow: 1;
`

/** Error Css */
const ErrorStyled = css`
  font-family: 'Balsamiq Sans';
  font-style: normal;
  font-weight: 400;
  padding: 4px 12px 0px 12px;
  font-size: 12px;
  line-height: 16px;
  color: ${RedColor.RED_900};
  flex: none;
  order: 0;
  flex-grow: 1;
`
