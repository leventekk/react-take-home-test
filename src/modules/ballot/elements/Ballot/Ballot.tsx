import type { ReactElement } from 'react'
import Provider from '../../context/BallotProvider'
import List from '../List/List'

const Ballot = (): ReactElement => (
  <Provider>
    <List />
  </Provider>
)

export default Ballot
