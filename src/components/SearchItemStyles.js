import styled from 'styled-components'
import { Link } from 'react-router-dom'
import img from '../assets/images//pattern.jpg'

export const ItemCard = styled.div`
  display: flex;
  max-width: 100%;
  height: 225px;
  text-align: left;
  background: #d1c4e9;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.25);
`

export const PosterWrapper = styled.div`
  width: 35%;
  overflow: hidden;
`

export const PosterImg = styled.img`
  width: 100%;
  height: 100%;
`

export const CardContent = styled.div`
  width: calc(100% - 150px);
  background-image: url(${img});
  padding: 15px;
  overflow: hidden;
`

export const CardTitle = styled.h2`
  font-size: 20px;
  max-width: 200px;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const CardYear = styled.p`
  font-size: 12px;
`
export const CardType = styled.p`
  font-size: 12px;
`
export const CardDetailsLink = styled(Link)`
  color: blue;
  text-decoration: none;
`
