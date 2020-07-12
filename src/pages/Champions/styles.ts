import styled from 'styled-components'

export const Title = styled.header``

export const Content = styled.div`
  display: flex;
  justify-content: center;
`

export const ChampionCard = styled.div`
  display: flex;
  flex: 1;
  /* border: 1px solid black; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 5px;
  max-width: 130px;
  max-height: 130px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    img {
      border: 1px solid red;
      @media (max-width: 370px) {
        width: 44px;
        height: 44px;
      }
    }
  }

  @media (max-width: 370px) {
    max-width: 60px;
    min-width: 60px;
    height: 100px;
  }

  @media (max-width: 780px) {
    max-width: 80px;
    min-width: 80px;
    height: 109px;
  }
`
