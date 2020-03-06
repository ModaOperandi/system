import styled from "styled-components";
import {
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
  typography,
  TypographyProps
} from "styled-system";

export interface BoxProps extends FlexboxProps, SpaceProps, TypographyProps {}

export const Box = styled.div<BoxProps>`
  ${flexbox}
  ${space}
  ${typography}
`;

Box.defaultProps = {
  fontFamily: "sans"
};
