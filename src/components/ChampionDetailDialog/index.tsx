import React from 'react'
import 'dotenv/config'
import { useSelector } from 'react-redux'
import Modal from 'react-bootstrap/Modal'

interface IChampionDetailDialog {
  onClose?: any
  championId?: any
}

const ChampionDetailDialog: React.FC<IChampionDetailDialog> = ({
  onClose,
  championId,
}: IChampionDetailDialog) => {
  const champion = useSelector((state: any) =>
    state.champions.items.find((c: any) => c.id === championId),
  )
  return (
    <Modal onHide={onClose} show>
      <Modal.Header closeButton>
        <Modal.Title>
          {champion.name}
          <p>
            <small>{champion.title}</small>
          </p>
        </Modal.Title>
        <Modal.Body>{champion.blurb}</Modal.Body>
      </Modal.Header>
    </Modal>
  )
}
export default ChampionDetailDialog
