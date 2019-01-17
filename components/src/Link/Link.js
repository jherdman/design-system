
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { color, space, themeGet } from 'styled-system'
import theme from '../theme.js'
import { darken } from 'polished'

const getHoverColor = props =>{
  return(
    props.hover ?
    themeGet("colors."+props.hover,props.hover) :
    darken('0.1',themeGet("colors."+props.color,props.color)(props))
  )
}

const Link = styled.a`
  ${color} ${space}
  text-decoration: ${props => props.underline ? 'underline' : 'none'}}
  &:hover {
    color: ${props => getHoverColor(props)} 
  }
`;

Link.propTypes = {
  underline: PropTypes.bool,
  ...color.propTypes,
}

Link.defaultProps = {
  underline: true,
  color: 'blue',
  theme: theme
}

export default Link;