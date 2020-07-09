import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux'
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

  return (
    <>
      <ul>
        <h1>Champions</h1>
        {champions.map((champion: IChampion) => (
          <li key={champion.key}>{champion.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Dashboard
