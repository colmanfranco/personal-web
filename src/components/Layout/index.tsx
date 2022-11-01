import {Header} from "@components/Layout/Header";
import {Footer} from "@components/Layout/Footer";


export const Layout = ({ children }: {children: JSX.Element}) => {
    return (
    <>
        <Header />
        {children}
        <Footer />
    </>
    )
}