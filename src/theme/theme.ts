import { Theme } from "styled-system";
import { typography, space, breakpoints, colors } from "@moda/tokens";

export const theme: Theme = {
  fonts: {
    sans: typography.fonts.sans.join(","),
    serif: typography.fonts.serif.join(",")
  },
  fontSizes: typography["font-scale"],
  lineHeights: typography["line-heights"],
  letterSpacings: typography["letter-spacing"],
  colors: colors.all,
  space: space.scale,
  breakpoints: [
    breakpoints.xs,
    breakpoints.sm,
    breakpoints.md,
    breakpoints.lg,
    breakpoints.xl
  ]
};
