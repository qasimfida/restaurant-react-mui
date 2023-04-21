import styled from "@emotion/styled";
import { Box, Typography, css } from "@mui/material";

export const Wrapper = styled(Box)`
  ${({theme: {palette}})=> css`
    color: ${palette.grey.main};
    &:hover {
      color: ${palette.primary.main};
    }
  `}
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TabsText = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-transform: capitalize;
}

`;
