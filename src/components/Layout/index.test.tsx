import {render, screen, within} from "@testing-library/react"
import { Layout } from "."

jest.mock('@components/Layout/Header', () => ({
    Header: (props: any) => <div data-testid="header" {...props} />,
}));

jest.mock('@components/Layout/Footer', () => ({
    Footer: (props: any) => <div data-testid="footer" {...props} />,
}));

describe('Layout test', () => {
    const layoutProps = { children: <></> }
    it('should have the right elements', () => {
        render(<Layout {...layoutProps}/>);

        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument();

        const footer = screen.getByTestId('footer')
        expect(footer).toBeInTheDocument();
    })
})