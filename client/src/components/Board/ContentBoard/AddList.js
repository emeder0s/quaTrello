import React, { useState, useContext } from 'react'
import { BoardContext } from '../../../providers/boardProvider';

export const AddList = () => {
  const { setNewListTitle } = useContext(BoardContext);
  const [showInput, setShowInput] = useState(false);
  const add = () => {
    setShowInput(!showInput);
  }

  const addTitle = e => {
    e.preventDefault();

    let title = {
      name_: e.target.title.value,
      fk_id_board: 1
    }

    setShowInput(!showInput)
    setNewListTitle(title)

  }

  if (showInput) {
    return (
      <div className='listInput'>
        <form onSubmit={addTitle}>
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
