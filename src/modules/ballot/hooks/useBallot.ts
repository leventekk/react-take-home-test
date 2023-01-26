import { useContext, useCallback } from 'react'
import BallotContext, { type State } from '../context/BallotContext'
import { getBallots } from '../api'

interface UseBallot {
  state: State
  vote: (categoryId: string, entityId: string) => void
  fetchBallot: (signal: AbortSignal) => Promise<void>
}

const useBallot = (): UseBallot => {
  const { state, dispatch } = useContext(BallotContext)

  const fetchBallot = useCallback(
    async (signal?: AbortSignal): Promise<void> => {
      const result = await getBallots(signal)
      dispatch({ type: 'storeCategories', categories: result })
    },
    [dispatch]
  )

  const vote = (categoryId: string, entityId: string): void => {
    dispatch({ type: 'vote', categoryId, entityId })
  }

  return { state, vote, fetchBallot }
}

export default useBallot
