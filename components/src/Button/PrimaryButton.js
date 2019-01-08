import styled from 'styled-components'
import Button from './Button'
import theme from '../theme'
import { darken } from 'polished'

const PrimaryButton = styled(Button)`
    color: ${theme.colors.white};
    border-color: ${theme.colors.blue};
    background-color: ${theme.colors.blue};

  &:hover {
    background-color: ${props => props.disabled ? null : darken(0.1, theme.colors.blue)};
    border-color: ${props => props.disabled ? null : darken(0.1, theme.colors.blue) };
  }
`

PrimaryButton.defaultProps = {
  theme: theme
}

export default PrimaryButton