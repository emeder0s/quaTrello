import React, { useState, useContext } from 'react'
import { BoardContext } from '../../../providers/boardProvider';
import { useParams } from 'react-router-dom'

export const AddList = () => {
  const {setNewList} = useContext(BoardContext);
  const [showInput, setShowInput] = useState(false);
  const { board } = useParams();
  const add = () => {
    setShowInput(!showInput);
  }

  const addList = e => {
    e.preventDefault();
    
    let title = {
      name_: e.target.title.value,
      fk_id_board: board}
    
      setShowInput(!showInput)
      setNewList(title)

  }

  if (showInput) {
    return (
      <div className='listInput'>
        <form onSubmit={addList}>
        <input type="text" placeholder="Introduzca el titulo de la lista..." required name="title" />
        <button type="submit" className='addList'>Añadir lista </button>
        <button className='close' onClick={add}>&#x2715;</button>
        </form>
      </div>
    )
  }
  return (
    <div className='addlistStart' onClick={add}>
      &#10010; AddList</div>
  )
}
