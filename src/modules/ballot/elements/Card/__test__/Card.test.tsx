import { screen, fireEvent } from '@testing-library/react'
import render from '@test/renderWithTheme'
import Card from '../Card'
import createMockNominee from '@ballot/context/__test__/createMockNominee'

describe('Ballot/Card', () => {
  let parameters: ReturnType<typeof createMockNominee>
  let onClick: () => void

  beforeEach(() => {
    onClick = jest.fn()
    parameters = createMockNominee({
      title: 'mock-title',
      photoUrl: 'mock-url'
    })
  })

  test('should render the card', () => {
    const { title, photoUrl: picture } = parameters
    render(<Card {...{ title, picture, onClick }} />)

    expect(screen.getByText(/mock-title/i)).toBeInTheDocument()
    expect(screen.getByAltText(/mock-title/i)).toHaveAttribute('src', 'mock-url')
  })

  test('should call the click event handler', () => {
    const { title, photoUrl: picture } = parameters
    render(<Card {...{ title, picture, onClick }} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalled()
  })

  test('should not call the click event handler when card is disabled', () => {
    const { title, photoUrl: picture } = parameters
    render(<Card {...{ title, picture, onClick }} isDisabled={true} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })
})
