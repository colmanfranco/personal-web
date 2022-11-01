import {Header} from "@components/Layout/Header";
import {Footer} from "@components/Layout/Footer";
import Box from "@mui/material/Box";
import {colorTheme} from "@styles/theme";


export const Layout = ({ children }: {children: JSX.Element}) => {
    return (
    <Box style={{ backgroundColor: colorTheme.palette.navy.main }} height='100vh' width='100vw'>
        <Header />
        {children}
        <Footer />
    </Box>
    )
}