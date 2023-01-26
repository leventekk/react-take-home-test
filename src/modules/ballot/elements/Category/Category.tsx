import type { PropsWithChildren, ReactElement } from 'react'
import styled from 'styled-components'

const Header = styled.div`
  background: ${({ theme }) => theme.palette.secondary};
  color: ${({ theme }) => theme.palette.primary};
  margin: 0 0 1.25rem;
  padding: 0.75rem 1rem;
`

const Title = styled.h2`
  font-weight: 500;
  margin: 0;
  text-transform: uppercase;
`

const Wrapper = styled.div`
  margin-bottom: 3rem;
`

const Category = ({ title, children }: PropsWithChildren<{ title: string }>): ReactElement => (
  <Wrapper>
    <Header>
      <Title>{title}</Title>
    </Header>

    {children}
  </Wrapper>
)

export default Category
