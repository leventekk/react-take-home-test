import { screen } from '@testing-library/react'
import render from '@test/renderWithTheme'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/awards 2021/i)
  expect(linkElement).toBeInTheDocument()
})
