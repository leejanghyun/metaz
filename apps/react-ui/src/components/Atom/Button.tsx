import {
  memo,
  PropsWithChildren,
  ReactElement,
  ButtonHTMLAttributes,
} from 'react'
import styled from '@emotion/styled'
import {css, SerializedStyles} from '@emotion/react'

// Constants
import {MonoColor, ElementType} from '../../constants'

// Image
import logo from '../../assets/images/ico/logo.jpeg'
import {Box} from './Box'

/** 컴포넌트 Property */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styles?: SerializedStyles
  convert?: boolean
}

/**
 * Button 컴포넌트
 * @param props 컴포넌트 property
 * @returns Button 컴포넌트
 */
export const Button = memo(
  ({children, ...props}: PropsWithChildren<ButtonProps>): ReactElement => {
    return (
      <StyledButton {...props}>
        <Box styles={LabelWrapperCss}>
          <MetaZImage src={logo} />
          <Box styles={LabelTextCss}>{children}</Box>
        </Box>
      </StyledButton>
    )
  },
)

/** Button Style Property */
interface ButtonStyleProps {
  styles?: SerializedStyles
  disabled?: boolean
}

/** MetaZ Image */
const MetaZImage = styled.img`
  position: relative;
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-right: 5px;
  top: -2px;
`

/** Label Text Css */
const LabelTextCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

// Common Button Css
const CommonButtonCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 252px;
  height: 48px;
  border-radius: 4px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  cursor: pointer;
  min-width: 252px;
  min-height: 48px;

  /* Font */
  font-family: 'Balsamiq Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${MonoColor.MONO_WHITE};

  &:hover {
    transform: scale(1.05);
  }
`

// Basic Button Css
const BasicCss = css`
  background: ${MonoColor.MONO_BLACK};
`

// Disabled Button Css
const DisableCss = css`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #d6d4d4;
`

const LabelWrapperCss = css`
  position: relative;
  display: flex;
`

// Button Styled
const StyledButton = styled(ElementType.Button)<ButtonStyleProps>`
  ${CommonButtonCss}
  ${(props) => props.styles}
  ${(props) => (props.disabled ? DisableCss : BasicCss)}
`
