import React from 'react';
import Button from "../lib/components/Button";

export default {
  title: 'Button',
  component: Button,
  parameters: {
    design: {
       type: 'figma',
       url: 'https://www.figma.com/file/ST4BVXE4ps05DlWCJLE1cP/Untitled?node-id=0%3A1'
    }
 }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //gives control box for color
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Button {...args} />;

export const Orange = Template.bind({});
Orange.args = {
  theme: "orange",
  label: 'CDS Button',
};

export const PeelGreen = Template.bind({});
PeelGreen.args = {
  theme: "peelGreen",
  label: 'CDS Button',
};

