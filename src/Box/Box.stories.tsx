import React from "react";
import { space } from "@moda/tokens";
import { States } from "storybook-states";
import { Box } from "./Box";

export default {
  title: "Box",
  component: Box
};

export const Default = () => (
  <States states={space.scale.map((_, i) => ({ m: i }))}>
    <Box py={4} px={6} fontFamily="serif">
      Moda Operandi
    </Box>
  </States>
);
