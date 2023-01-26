import type { Category } from '../BallotContext'
import createMockNominee from './createMockNominee'

const createMockCategory = (parameters?: Partial<Category>): Category => ({
  id: 'mock-category-id',
  title: 'Mock category title',
  items: [createMockNominee(), ...(parameters?.items ?? [])],
  isAllowedToVote: true,
  ...parameters
})

export default createMockCategory
