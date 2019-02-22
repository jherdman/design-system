import styled from "styled-components";
import theme from "../theme";
import { Text } from "ComponentsRoot";

const Title = Text.withComponent("h1");

Title.defaultProps = {
  m: 0,
  fontSize: 4,
  lineHeight: theme.lineHeights.title,
  fontWeight: theme.fontWeights.light,
  mb: 6,
  theme,
};

const SectionTitle = Text.withComponent("h2");

SectionTitle.defaultProps = {
  m: 0,
  fontSize: 3,
  fontWeight: theme.fontWeights.medium,
  lineHeight: theme.lineHeights.sectionTitle,
  mb: 3,
  theme,
};

const SubsectionTitleBase = Text.withComponent("h3");

const SubsectionTitle = styled(SubsectionTitleBase)({});

SubsectionTitle.defaultProps = {
  m: 0,
  fontSize: 2,
  fontWeight: theme.fontWeights.medium,
  lineHeight: theme.lineHeights.sectionTitle,
  mb: 2,
  theme,
};

export { Title, SectionTitle, SubsectionTitle };
