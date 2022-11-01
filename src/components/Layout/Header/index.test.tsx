import {render, screen, within} from "@testing-library/react";
import {Header} from "@components/Layout/Header/index";


describe('Header test', () => {
    it('should have the correct elements', function () {
        render(<Header />);

        const header = screen.getByRole('banner');
        expect(header).toBeInTheDocument();

        const logo = within(header).getByRole('img');
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', '/static/white-logo.svg');
        expect(logo).toHaveAttribute('alt', 'Personal logo');

    });
})