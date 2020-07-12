import React, { useState } from 'react'
import 'dotenv/config'
import { useDispatch, useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'

import chunk from 'lodash.chunk'

import { retrieveChampions } from '../../ducks/championsSlice'

import ChampionDetailDialog from '../../components/ChampionDetailDialog'
import ChampionFilterForm from '../../components/ChampionFilterForm'

import { ChampionCard } from './styles'

const Champions: React.FC = () => {
  const dispatch = useDispatch()

  const { isLoading, isError, items: champions } = useSelector(
    (state: any) => state.champions,
  )

  const nameCriteria = useSelector((state: any) => state.filtering.nameCriteria)

  const [selectedChampionId, setSelectedChampionId] = useState(null)

  React.useEffect(() => {
    dispatch(retrieveChampions)
  }, [dispatch])

  if (isLoading) {
    return <p>Aguarde o carregamento dos campeões...</p>
  }

  if (isError) {
    return <p>Houve uma falha no carregamento. Tente novamente.</p>
  }

  const filteredChampions = champions.filter((c: any) =>
    c.name.toLowerCase().includes(nameCriteria.toLowerCase()),
  )
  const championsRows = chunk(filteredChampions, 7)

  console.log(champions)

  return (
    <>
      <div>
        <Container as="header">
          <h1>Escolha seu campeão...</h1>
          <ChampionFilterForm />
        </Container>
        <Container>
          {championsRows.map((champions, index) => (
            <Row key={index}>
              {champions.map((champion: any) => (
                <ChampionCard key={champion.key}>
                  <Col onClick={() => setSelectedChampionId(champion.id)}>
                    <Figure>
                      <Figure.Image
                        width={champion.image.w}
                        height={champion.image.h}
                        alt={champion.name}
                        src={`${
                          process.env.REACT_APP_LOL_CHAMPION_SQUARE_ASSETS +
                          champion.image.full
                        }`}
                      />
                      <Figure.Caption>{champion.name}</Figure.Caption>
                    </Figure>
                  </Col>
                </ChampionCard>
              ))}
            </Row>
          ))}
        </Container>
        {selectedChampionId && (
          <ChampionDetailDialog
            championId={selectedChampionId}
            onClose={() => setSelectedChampionId(null)}
          />
        )}
      </div>
    </>
  )
}

export default Champions
