import { useReducer, type PropsWithChildren, type ReactElement } from 'react'
import BallotContext, { initialState } from './BallotContext'
import ballotReducer from './ballotReducer'

const BallotProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [state, dispatch] = useReducer(ballotReducer, initialState)
  return <BallotContext.Provider value={{ state, dispatch }}>{children}</BallotContext.Provider>
}

export default BallotProvider
