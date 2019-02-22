import React from "react";
import { storiesOf } from "@storybook/react";
import {
  Radio,
  RadioGroup,
  Field,
} from "ComponentsRoot";

storiesOf("RadioGroup", module)
  .add("Radio Group", () => (
    <RadioGroup name="settingSelection" defaultValue="a">
      <Radio value="a" labelText="Option A" />
      <Radio value="b" labelText="Option B" />
      <Radio value="c" labelText="Option C" />
    </RadioGroup>
  ))
  .add("Radio Group Field", () => (
    <Field labelText="Setting Selection" helpText="Select a setting from the menu below:"> {/* eslint-disable-line */}
      <RadioGroup name="settingSelection" defaultValue="a">
        <Radio value="a" labelText="Option A" />
        <Radio value="b" labelText="Option B" />
        <Radio value="c" labelText="Option C" />
      </RadioGroup>
    </Field>
  ))
  .add("Set to disabled", () => (
    <RadioGroup disabled name="settingSelection" defaultValue="a">
      <Radio value="a" labelText="Option A" />
      <Radio value="b" labelText="Option B" />
      <Radio value="c" labelText="Option C" />
    </RadioGroup>
  ))
  .add("Controlled", () => (
    <RadioGroup name="settingSelection" checkedValue="a" onChange={ () => {} }>
      <Radio value="a" labelText="Option A" />
      <Radio value="b" labelText="Option B" />
      <Radio value="c" labelText="Option C" />
    </RadioGroup>
  ));
