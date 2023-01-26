import type { ReactElement } from 'react'
import Container from '@common/elements/Grid/Container'
import Header from '@common/elements/Header/Header'
import Ballot from '@ballot/elements/Ballot/Ballot'
import Title from '@common/elements/Text/Title'

const App = (): ReactElement => (
  <Container>
    <Header>
      <Title>AWARDS 2021</Title>
    </Header>
    <Ballot />
  </Container>
)

export default App
