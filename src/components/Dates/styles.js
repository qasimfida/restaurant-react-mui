import styled from "@emotion/styled";
import { Box, Tab, Tabs, Typography, css } from "@mui/material";

export const Wrapper = styled(Tab)`
${({theme: {palette}})=> css`
  display: flex;
  justify-content: center;
  height: 60px;
  width: 50px;
  min-width: 50px;
  border-radius: 10px;
  cursor: pointer;
  color: ${palette.primary.main};
  background: ${palette.white.main};
  transition: 0.3s all ease;
  &.Mui-selected
   {
    background: ${palette.primary.main};
    color: ${palette.white.main};
    height: 66px;
    border-bottom: none;
  }
  &.disabled {
    background: ${palette.grey.main};
    color: ${palette.grey.light};
  }
  &.locked {
    background: ${palette.grey.smoke};
    color: ${palette.grey.dark};
    cursor: not-allowed;
  }
  &:not(.disabled):not(.locked).focus {
    background: ${palette.primary.main};
    color: ${palette.white.main};
  }
  &:not(.disabled):not(.locked):hover {
    background: ${palette.primary.main};
    color: ${palette.white.main};
  }
`}
`;

export const Day = styled(Typography)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
  line-height: ${({locked})=>locked ? '28px':'24px'};
  position: relative;
`;

export const Badge = styled(Typography)`
  position: absolute;
  padding: 0 2px;
  font-size: 10px;
  font-weight: 700;
  line-height: 16px;
  border-radius: 5px;
  ${({ theme: {palette} })=> css`
    background: ${palette.grey.light};
    color: ${palette.red.main};
  `}
`;
export const Date = styled.span`
  font-weight: 500;
  font-size: 12px;
`;
export const BorderedBox = styled(Box)`
  border-bottom: 1px solid  ${({ theme: {palette} })=> palette.gray.light};
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;
export const DatesWrapper = styled(Tabs)`
  display: flex;
  position: relative;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding-top: 0px;
  padding-bottom: 20px;
  min-height: 68px;
  overflow: hidden;
  max-width: 480px;
  .MuiTabs-flexContainer {
    gap: 12px;
    align-items: center;
  }
  .MuiTabs-indicator {
    display: none;
  }
  .MuiTabs-scrollButtons {
    width: unset;
  }
`;
