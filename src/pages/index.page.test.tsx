import { render, screen } from '@testing-library/react'
import Home from './index.page'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('should render the loading component', () => {
    render(<Home />);

    const heading = screen.getByText('Franco website');

    expect(heading).toBeInTheDocument();
  })
})