import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import chunk from 'lodash.chunk'

import { retrieveChampions } from '../../ducks/championsSlice'

interface IChampion {
  name: string
  key: number
}

const Dashboard: React.FC = () => {
  const dispatch = useDispatch()
  const { isLoading, isError, items: champions } = useSelector(
    (state: any) => state.champions,
  )

  React.useEffect(() => {
    dispatch(retrieveChampions)
  }, [dispatch])

  if (isLoading) {
    return <p>Aguarde o carregamento dos campeões...</p>
  }

  if (isError) {
    return <p>Houve uma falha no carregamento. Tente novamente.</p>
  }

  const championsRows = chunk(champions, 3)

  return (
    <>
      <div>
        <Container as="header">
          <h1>Escolha seu campeão...</h1>
        </Container>
        <Container>
          {championsRows.map((champions, index) => (
            <Row key={index}>
              {champions.map((champion: any) => (
                <Col key={champion.key}>{champion.name}</Col>
              ))}
            </Row>
          ))}
        </Container>
      </div>
    </>
  )
}

export default Dashboard
