import type { ReactElement } from 'react'
import Container from '@common/elements/Grid/Container'
import Header from '@common/elements/Header/Header'
import List from '@ballot/elements/List/List'
import Title from '@common/elements/Text/Title'

const App = (): ReactElement => (
  <Container>
    <Header>
      <Title>AWARDS 2021</Title>
    </Header>
    <List />
  </Container>
)

export default App
