import type { CategoryItem } from '../BallotContext'

const createMockNominee = (parameters?: Partial<CategoryItem>): CategoryItem => ({
  id: 'mock-nominee-id',
  title: 'mock-nominee-title',
  photoUrl: 'http://mock-category-image.com',
  isSelected: false,
  ...parameters
})

export default createMockNominee
