import styled from "@emotion/styled";
import { Box, Typography, css } from "@mui/material";

export const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
`
export const Main = styled('nav')`
    width: 100%;
    position: fixed;
    z-index: 999;
    left: 0;
    ${({theme: {palette}})=>css`
        background: ${palette.primary.lighter};
        border-bottom: 1px solid ${palette.gray.light};
    `}
`
export const Title = styled(Typography)`
    font-weight: 700;
    font-size: 18px;
    ${({theme: { palette }})=> css`
        color: ${palette.grey.dark};
    `}
`
export const Image = styled('img')`
    height: 48px;
    width: 48px;
    min-height: 48px;
    min-width: 48px;
    border-radius: 50%;
`
export const Content = styled(Box)`
    padding-top: 52px;
`
export const Navigation = styled(Box)`
    display: flex;
    align-items: center;
    .pointer {
        cursor: pointer;
    }
`