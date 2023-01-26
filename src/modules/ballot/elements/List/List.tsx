import { useEffect, type ReactElement } from 'react'
import Category from '../Category/Category'
import Card from '../Card/Card'
import CardList from '../Card/List'
import useBallot from '../../hooks/useBallot'

const List = (): ReactElement => {
  const {
    fetchBallot,
    vote,
    state: { categories }
  } = useBallot()

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async (): Promise<void> => {
      await fetchBallot(controller.signal)
    }

    void fetchData()

    return () => {
      controller.abort()
    }
  }, [fetchBallot])

  return (
    <>
      {categories.map(({ id: categoryId, title, items, isAllowedToVote }) => (
        <Category key={categoryId} {...{ title }}>
          <CardList>
            {items.map(({ id, title, photoUrl: picture }) => (
              <Card
                key={id}
                {...{ title, picture }}
                isDisabled={!isAllowedToVote}
                onClick={() => {
                  vote(categoryId, id)
                }}
              />
            ))}
          </CardList>
        </Category>
      ))}
    </>
  )
}

export default List
