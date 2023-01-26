import styled from 'styled-components'
import media from '../../helpers/media'

const Container = styled.div`
  padding: 0 1.5rem;

  ${media.greaterThan('desktop')`
    margin: 0 auto;
    max-width: 60%;
    padding: 0;
  `}
`

export default Container
