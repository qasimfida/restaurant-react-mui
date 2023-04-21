import styled from "@emotion/styled";
import { Box, CardActionArea, CardContent, CardMedia, Typography, css } from "@mui/material";

export const StyledMedia = styled(CardMedia)`
  height: 110px;
  width: 140px;
  min-width: 110px;
  border-radius: 15px;
  overflow: hidden;
`;

export const CardTitle = styled(Typography)`
  font-weight: 600;
  font-size: 16px;
  height: 24px;
  margin-top: 12px;
  margin-bottom: 0px;
  overflow: hidden;
  color: ${({theme: {palette}})=>palette.grey.main};
`;
export const Body = styled(CardActionArea)`
  display: flex;
  overflow: hidden;
`;
export const Description = styled(Typography)`
  font-weight: 300;
  font-size: 12px;
  height: 23px;
  overflow: hidden;
`;
export const FoodMacrosWrapper = styled(Box)`
margin-top: 4px;
display: flex;
justify-content: space-between;
text-align: center;
gap: 8px;
box-sizing: border-box;
`;
export const Content = styled(CardContent)`
padding: 0 12px 0;
display: flex;
flex-direction: column;
justify-content: space-between;
`;
export const FoodMacros = styled(Typography)`
font-size: 12px;
font-weight: 300;
color: ${({theme: {palette}})=>palette.grey.main};
`;
export const TotalMacros = styled.span`
color: ${({theme: {palette}})=>palette.primary.main};
font-weight: 600;
font-size: 14px;
letter-spacing: 48;
`;

export const StyledCard = styled(Box)`
  ${({theme: {palette}})=> css`
    border: 2px solid ${palette.white.smoke};
    box-sizing: border-box;
    padding: 4px;
    max-width: 100%;
    background: ${palette.primary.lighter};
    border-radius: 15px;
    transition: 1px 0.2s ease;
    &:hover {
      border: 2px solid ${palette.primary.main};
      background: ${palette.primary.lighter};
      .title {
        color: ${palette.primary.main};
      }
    }
    button {
      align-items: flex-start;
      justify-content: flex-start;
      &:hover .MuiCardActionArea-focusHighlight.css-1v2exvi-MuiCardActionArea-focusHighlight{
        display: none;
      }
    }
  `}
`;