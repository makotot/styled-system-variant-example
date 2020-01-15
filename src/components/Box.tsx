import styled from "styled-components";
import { color, space, ColorProps, SpaceProps } from "styled-system";

export const Box = styled.div<ColorProps & SpaceProps>`
  ${color}
  ${space}
`;
