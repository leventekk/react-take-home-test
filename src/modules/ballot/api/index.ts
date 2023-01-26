import type { Category } from '../context/BallotContext'

export const getBallots = async (signal?: AbortSignal): Promise<Category[]> => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/getBallotData`, {
    signal
  })

  const { items } = await response.json()

  return items
}
