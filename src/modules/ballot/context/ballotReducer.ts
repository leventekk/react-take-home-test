import type { Action, Category, CategoryItem, Nominee, State } from './BallotContext'

const mapItemsAfterVote =
  (entryId: Nominee['entityId']) =>
  ({ id, title, photoUrl }: CategoryItem): CategoryItem => ({
    id,
    title,
    photoUrl,
    isSelected: entryId === id
  })

const mapCategoriesAfterVote =
  ({ categoryId, entityId }: Nominee) =>
  ({ id, title, items, isAllowedToVote }: Category): Category => ({
    id,
    title,
    items: items.map(mapItemsAfterVote(entityId)),
    isAllowedToVote: id === categoryId ? false : isAllowedToVote
  })

const ballotReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'storeCategories': {
      return {
        ...state,
        categories: action.categories.map(({ id, title, items }) => ({
          id,
          title,
          items: items.map((item) => ({ ...item, isSelected: false })),
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
        categories: state.categories.map(mapCategoriesAfterVote(nominee)),
        nominees: [...state.nominees, nominee]
      }
    }
  }
}

export default ballotReducer
