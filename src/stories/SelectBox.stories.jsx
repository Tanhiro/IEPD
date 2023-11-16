import React from "react";

import { SelectBox } from "components";

export default {
  title: "iepd/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "RoundedBorder20",
  variant: "OutlineGray400",
  className: "w-[300px]",
};
