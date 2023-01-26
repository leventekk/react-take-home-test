import styled from 'styled-components'
import media from '@common/helpers/media'

const CardList = styled.div`
  column-gap: 1.25rem;
  display: grid;
  row-gap: 1.25rem;

  ${media.greaterThan('desktop')`
    grid-template-columns: repeat(4, 1fr);
  `}
`

export default CardList
