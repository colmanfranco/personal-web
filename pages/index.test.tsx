import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'


jest.mock('@storyblok/react', () => ({
    __esModule: true,
    useStoryblokState: () => jest.fn(),
  }));

describe('Home', () => {
  it('should render the loading component', () => {
    render(<Home />)

    const heading = screen.getByText('Loading...')

    expect(heading).toBeInTheDocument()
  })
})