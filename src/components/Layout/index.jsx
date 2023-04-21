import { Content, Header, Image, Main, Navigation, Title } from "./styles"
import logo from "./../../assets/logos/logo.png"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Container } from "@mui/material";
const Layout = ({children}) => {
    return <>
        <Main>
            <Container>
                <Header>
                    <Navigation>
                        <ArrowBackIosIcon fontSize="48px" className="pointer" />
                        <Title>Products</Title>
                    </Navigation>
                    <Image src={logo} alt="logo" />
                </Header>
            </Container>
        </Main>
        <Content>
            {children}
        </Content>
    </>
}
export default Layout