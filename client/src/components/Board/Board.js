import React from 'react'
import AsideBoard from './AsideBoard/AsideBoard'
import { CreateBoard } from '../Boards/CreateBoard'
import { LinkNavBoard } from './MenuBoard/LinkNavBoard'

const Board = () => {
  return (
    <div className='board'>
      <AsideBoard />
      <LinkNavBoard/>
    </div>
  )
}

export default Board
