import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NotConnected } from "./index";
import { Block } from "./Block";

export default {
  title: "components/NotConnected",
  component: NotConnected,
} as ComponentMeta<typeof NotConnected>;

const Template: ComponentStory<typeof NotConnected> = (args: any) => (
  <Block {...args} />
);

export const NotConnectedStory = Template.bind({});
