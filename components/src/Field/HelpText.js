import React from "react";
import PropTypes from "prop-types";
import theme from "../theme";
import { Text } from "ComponentsRoot";

const HelpText = props => (
  <Text
    fontSize={ theme.fontSizes[0] } lineHeight={ theme.lineHeights.smallTextBase }
    { ...props }
  />
);

HelpText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

HelpText.defaultProps = {
  children: null,
};

export default HelpText;
