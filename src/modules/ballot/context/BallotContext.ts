import { createContext } from 'react'

export interface CategoryItem {
  title: string
  photoUrl: string
  id: string
  isSelected: boolean
}

export interface Category {
  id: string
  title: string
  isAllowedToVote: boolean
  items: CategoryItem[]
}

export interface Nominee {
  categoryId: string
  entityId: string
}

export interface State {
  categories: Category[]
  nominees: Nominee[]
}

export const initialState: State = {
  categories: [],
  nominees: []
}

type ActionNames = 'vote' | 'storeCategories'

type GeneralAction<T extends ActionNames, S = unknown> = {
  type: T
} & S

export type Action = GeneralAction<'storeCategories', { categories: Category[] }> | GeneralAction<'vote', Nominee>

type Dispatch = (action: Action) => void

interface ContextVale {
  state: State
  dispatch: Dispatch
}

const BallotContext = createContext<ContextVale>({
  state: initialState,
  dispatch: () => {}
})

export default BallotContext
