import { render, screen } from "@testing-library/react"
import { Layout } from "."


describe('Layout test', () => {
    const layoutProps = { children: <></> }
    it('should have the right elements', () => {
        render(<Layout {...layoutProps}/>);

        const header = screen.getByRole('banner');
        const footer = screen.getByRole('contentinfo');
        expect(header).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
    })
})