import React from "react";
import { action } from "@storybook/addon-actions";

import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "../Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    buttonType: {
      description: "Type of the button, determines its style",
      control: {
        type: "select",
      },
      options: [
        "primary",
        "secondary",
        "destroy",
        "confirm",
        "subtle",
        "cancel",
      ],
    },
    onClick: {
      description: "Function called when the button is clicked",
      action: "clicked",
    },
    children: {
      description: "Content of the button",
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => (
  <Button buttonType={args.buttonType} onClick={action("Button clicked")}>
    {args.children}
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  buttonType: "primary", // Set default button type
  children: "Click Me!", // Set default children text
};
