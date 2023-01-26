import type { Action, State } from './BallotContext'

const ballotReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'storeCategories': {
      return {
        ...state,
        categories: action.categories.map(({ id, title, items }) => ({
          id,
          title,
          items,
          isAllowedToVote: true
        }))
      }
    }
    case 'vote': {
      const { categoryId, entityId } = action
      const hasNominated = state.nominees.find((nominee) => nominee.categoryId === categoryId)

      if (hasNominated !== undefined) {
        return state
      }

      const nominee = {
        categoryId,
        entityId
      }
      return {
        ...state,
        categories: state.categories.map(({ id, title, items, isAllowedToVote }) => ({
          id,
          title,
          items,
          isAllowedToVote: id === categoryId ? false : isAllowedToVote
        })),
        nominees: [...state.nominees, nominee]
      }
    }
  }
}

export default ballotReducer
