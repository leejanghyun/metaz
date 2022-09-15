import {memo, useEffect} from 'react'
import styled from '@emotion/styled'

// Constants
import {MonoColor} from '../../constants'

/** 컴포넌트 Property */
type ToastProps = {
  message: string
  isShow: boolean
  onTimeout: () => void
}

/**
 * Toast 컴포넌트
 * @param props 컴포넌트 Property
 * @returns Toast 컴포넌트
 */
export const Toast = memo(({message, isShow, onTimeout}: ToastProps) => {
  /**
   * isShow 변경 시
   */
  useEffect(() => {
    if (isShow) {
      setTimeout(() => onTimeout(), 5000)
    }
  }, [isShow])

  return <>{isShow && <ToastWrapper>{message}</ToastWrapper>}</>
})

const ToastWrapper = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background: ${MonoColor.MONO_BLACK};
  color: ${MonoColor.MONO_WHITE};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 14px 16px;
  min-width: 307px;
  width: 307px;
  height: 48px;
  background: #1a1a1a;
  opacity: 0.4;
  border-radius: 4px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  font-family: 'Balsamiq Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`
