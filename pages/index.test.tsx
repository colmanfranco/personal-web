import { render, screen } from '@testing-library/react'
import Home from '../pages/index.page'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('should render the loading component', () => {
    render(<Home />);

    const heading = screen.getByText('My site');

    expect(heading).toBeInTheDocument();
  })
})