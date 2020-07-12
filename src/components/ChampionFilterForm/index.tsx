import React from 'react'
import { useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form'

import { setNameCriteria } from '../../ducks/filteringSlice'

const ChampionFilterForm: React.FC = () => {
  const dispatch = useDispatch()

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.isDefaultPrevented()
    dispatch(setNameCriteria(event.target.value))
  }

  return (
    <Form>
      <Form.Group controlId="nameCriteria">
        <Form.Control
          placeholder="Nome do campeão"
          type="text"
          onChange={handleNameChange}
        />
      </Form.Group>
    </Form>
  )
}

export default ChampionFilterForm
