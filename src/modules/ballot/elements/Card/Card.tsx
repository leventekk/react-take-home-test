import type { ReactElement } from 'react'
import Button from '@common/elements/Button/Button'

interface CardProperties {
  name: string
  picture: string
}

const Card = ({ name, picture }: CardProperties): ReactElement => (
  <div>
    <div>{name}</div>
    <img src={picture} />
    <Button>Select Nominee</Button>
  </div>
)

export default Card
