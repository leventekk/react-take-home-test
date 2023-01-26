import styled from 'styled-components'

const Button = styled.button`
  background: ${({ theme }) => theme.palette.accent};
  border: 2px solid ${({ theme }) => theme.palette.accentHover};
  color: ${({ theme }) => theme.palette.text};
  cursor: pointer;
  font-weight: 500;
  padding: 1rem 1.5rem;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.palette.accentHover};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.palette.secondary};
  }
`

export default Button
