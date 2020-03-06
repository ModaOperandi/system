import React from "react";
import { DecoratorFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../../src/GlobalStyles";
import { theme } from "../../../src/theme";

export const themeDecorator: DecoratorFn = storyFn => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </>
);
