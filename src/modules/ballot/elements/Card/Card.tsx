import type { ReactElement } from 'react'
import styled from 'styled-components'
import Button from '@common/elements/Button/Button'

const Wrapper = styled.div<{ $isSelected: boolean }>`
  background: ${({ theme, $isSelected }) => ($isSelected ? theme?.palette.accentHover : theme?.palette.accent)};
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Button /* sc-sel */} {
    margin-top: auto;
  }
`

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
`

const Image = styled.img`
  display: block;
  max-width: 100%;
  margin: 1rem 0;
`

interface CardProperties {
  title: string
  picture: string
  isDisabled?: boolean
  isSelected?: boolean
  onClick: () => void
}

const Card = ({ title, picture, isDisabled, isSelected, onClick }: CardProperties): ReactElement => (
  <Wrapper $isSelected={isSelected ?? false}>
    <Title>{title}</Title>
    <Image alt={title} src={picture} />
    <Button disabled={isDisabled} {...{ onClick }}>
      {isDisabled ?? false ? 'You have voted' : 'Select Nominee'}
    </Button>
  </Wrapper>
)

export default Card
