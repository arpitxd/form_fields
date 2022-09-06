import React from "react";
import Loader from "../lib/components/Loader";

export default {
  component: Loader,
};

 const componentTemplate = (args) => <Loader {...args} />;

export const Template = componentTemplate.bind({});
Template.args = {
  closeLoader: () => alert("Loader Closed"),
  
};
