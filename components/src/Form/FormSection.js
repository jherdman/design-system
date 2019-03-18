import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { SubsectionTitle, Field } from "ComponentsRoot";
import theme from "../theme";

const FormSectionTitle = styled(SubsectionTitle).attrs({
  as: "legend",
})({});

const BaseFormSection = ({
  title,
  children,
  ...props
}) => (
  <fieldset { ...props } style={{border: "solid 2px red"}}>
    { (title != null)
        && (
          <FormSectionTitle>{ title }</FormSectionTitle>
        )
      }
      { children.map( child => (
      <Field style={{border: "solid 2px blue"}}>
        {React.cloneElement(child)}
      </Field>
    )) }
  </fieldset>
);

const FormSection = styled(BaseFormSection)(({ title }) => ({
  padding: 0,
  margin: 0,
  border: "none",
  [`${FormSectionTitle}`]: {
    padding: 0,
    marginBottom: title ? theme.space.x3 : 0,
  },
  [`${Field}`]: {
    marginBottom: theme.space.x3,
    "&:last-child": {
      marginBottom: 0,
    },
  },
}));

BaseFormSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

BaseFormSection.defaultProps = {
  children: [],
  title: null,
};

export default FormSection;
