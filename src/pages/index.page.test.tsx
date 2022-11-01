import { render, screen } from '@testing-library/react'
import Home from './index.page';

const mockedUseStoryContent = jest.fn();

jest.mock('@hooks/useStoryContent', () => ({
  __esModule: true,
  default: () => mockedUseStoryContent(),
}));

jest.mock('@mui/material/Container', () => ({
  __esModule: true,
  default: (props: any) => <div data-testid="container" {...props} />,
}));

describe('Home', () => {
  const storyBlockData = 'some awesome text'
  it('should render the loading component', () => {
    mockedUseStoryContent.mockReturnValue(storyBlockData);
    render(<Home />);

    const container = screen.getByTestId('container');
    expect(container).toBeInTheDocument();
  })
})