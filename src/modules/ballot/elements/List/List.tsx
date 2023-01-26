import { useState, useEffect, type ReactElement, useCallback } from 'react'
import styled from 'styled-components'
import Button from '@common/elements/Button/Button'
import Modal from '@common/elements/Modal/Modal'
import Category from '../Category/Category'
import Card from '../Card/Card'
import CardList from '../Card/List'
import useBallot from '../../hooks/useBallot'

const ButtonWrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 1.5rem;
`

const List = (): ReactElement => {
  const {
    fetchBallot,
    vote,
    state: { categories, nominees }
  } = useBallot()
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

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

  const onCloseModal = useCallback(() => {
    setIsModalVisible(false)
  }, [setIsModalVisible])

  return (
    <>
      {categories.map(({ id: categoryId, title, items, isAllowedToVote }) => (
        <Category key={categoryId} {...{ title }}>
          <CardList>
            {items.map(({ id, title, photoUrl: picture, isSelected }) => (
              <Card
                key={id}
                {...{ title, picture, isSelected }}
                isDisabled={!isAllowedToVote}
                onClick={() => {
                  vote(categoryId, id)
                }}
              />
            ))}
          </CardList>
        </Category>
      ))}
      {isModalVisible && <Modal title="Success" onClose={onCloseModal} />}
      {nominees.length > 0 && (
        <ButtonWrapper>
          <Button
            onClick={() => {
              setIsModalVisible(true)
            }}
          >
            Submit Ballot
          </Button>
        </ButtonWrapper>
      )}
    </>
  )
}

export default List
