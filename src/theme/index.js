import styled from '@emotion/styled';
import { Box, Container, css } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
      },
    palette: {
        primary: {
            main: '#579b3f',
            light: '#579b3f',
            lighter: '#e9f1e7',
        },
        gray: {
            light: '#dfdfdf'
        },
        grey: {
			main: '#4d4d4d',
            light: '#FBFBFB',
			smoke: '#e3e3e3',
			dark: '#333333'
        },
        white: {
			main: '#fff',
			smoke: '#e9e9e9'
        },
        red: {
            main: '#de1738'
        }
    },
});
const Wrapper = styled(Box)`
	width: 100%;
	min-height: 100vh;
	height: auto;
	margin: 0 auto;
	${({theme: {palette}})=> css`
		background: ${palette.grey.light};
		position: relative;
	`})
`
const Theme =  ({children}) => {
    return <ThemeProvider theme={theme}>
		<Wrapper>
            <Container>
        	    {children}
            </Container>
		</Wrapper>
    </ThemeProvider>
}
export default Theme