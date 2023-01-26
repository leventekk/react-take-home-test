import type { CategoryItem } from '../BallotContext'

const createMockNominee = (parameters?: Partial<CategoryItem>): CategoryItem => ({
  id: 'mock-nominee-id',
  title: 'mock-nominee-title',
  photoUrl: 'http://mock-category-image.com',
  ...parameters
})

export default createMockNominee
