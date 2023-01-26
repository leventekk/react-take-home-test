import type { PropsWithChildren, ReactElement } from 'react'
import styled from 'styled-components'

const Backdrop = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
`

const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.secondary};
  color: ${({ theme }) => theme.palette.primary};
  min-height: 300px;
  min-width: 450px;
  padding: 1rem;
  position: relative;
`

const Title = styled.h4`
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  text-align: center;
`

const Button = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`

const Modal = ({
  title,
  children,
  onClose
}: PropsWithChildren<{ title: string; onClose: () => void }>): ReactElement => (
  <Backdrop>
    <Wrapper>
      <Title>{title}</Title>
      <Button onClick={onClose}>x</Button>
      {children}
    </Wrapper>
  </Backdrop>
)

export default Modal
