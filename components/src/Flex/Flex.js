import Box from '../Box/Box';
import styled from 'styled-components'
import {alignItems,justifyContent,flexWrap,flexDirection} from 'styled-system';

const Flex = styled(Box)({
  display: 'flex'
},
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
)

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
}

export default Flex