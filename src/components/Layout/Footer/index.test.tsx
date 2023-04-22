import {getAllByRole, render, screen} from "@testing-library/react";
import {Footer} from "@components/Layout/Footer/index";

jest.mock('@components/Icons/Github', () => ({
    Github: (props: any) => <div data-testid="github" {...props} />,
}));

jest.mock('@components/Icons/Linkedin', () => ({
    Linkedin: (props: any) => <div data-testid="linkedin" {...props} />,
}));

jest.mock('@components/Icons/Twitter', () => ({
    Twitter: (props: any) => <div data-testid="twitter" {...props} />,
}));

describe('Footer test', () => {
    it('should have the correct elements', function () {
        render(<Footer />);

        const footer = screen.getByRole('contentinfo');
        expect(footer).toBeInTheDocument();

        const githubIcon = screen.getByTestId('github');
        expect(githubIcon).toBeInTheDocument();

        const linkedinIcon = screen.getByTestId('linkedin');
        expect(linkedinIcon).toBeInTheDocument();
        
        const twitterIcon = screen.getByTestId('twitter');
        expect(twitterIcon).toBeInTheDocument();

        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(3);
    });
})