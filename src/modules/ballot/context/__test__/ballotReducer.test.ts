import reducer from '../ballotReducer'
import type { State } from '../BallotContext'
import createMockCategory from './createMockCategory'

describe('ballotReducer', () => {
  let state: State

  beforeEach(() => {
    state = {
      categories: [],
      nominees: []
    }
  })

  test('should store the categories', () => {
    expect(reducer(state, { type: 'storeCategories', categories: [createMockCategory()] })).toEqual(
      expect.objectContaining({
        categories: [
          {
            id: 'mock-category-id',
            title: 'Mock category title',
            items: [
              {
                id: 'mock-nominee-id',
                title: 'mock-nominee-title',
                photoUrl: 'http://mock-category-image.com'
              }
            ],
            isAllowedToVote: true
          }
        ]
      })
    )
  })

  describe('when voting', () => {
    beforeEach(() => {
      state = {
        categories: [createMockCategory()],
        nominees: []
      }
    })

    test('should store the vote', () => {
      expect(reducer(state, { type: 'vote', categoryId: 'mock-category-id', entityId: 'mock-nominee-id' })).toEqual(
        expect.objectContaining({
          nominees: [
            {
              categoryId: 'mock-category-id',
              entityId: 'mock-nominee-id'
            }
          ]
        })
      )
    })
  })

  describe('when voted', () => {
    beforeEach(() => {
      state = {
        categories: [createMockCategory()],
        nominees: [
          {
            categoryId: 'mock-category-id',
            entityId: 'mock-nominee-id'
          }
        ]
      }
    })

    test('should prevent storing that item what has a vote', () => {
      expect(reducer(state, { type: 'vote', categoryId: 'mock-category-id', entityId: 'mock-nominee-id' })).toEqual(
        expect.objectContaining({
          nominees: [
            {
              categoryId: 'mock-category-id',
              entityId: 'mock-nominee-id'
            }
          ]
        })
      )
    })
  })
})
