import React, { useState, useEffect } from 'react'
import AsideBoard from './AsideBoard/AsideBoard'
import { CreateBoard } from '../Boards/CreateBoard'
import { LinkNavBoard } from './LinkNavBoard'
import { AddList } from './ContentBoard/AddList'
import { List } from './ContentBoard/List'
import { BoardContext } from '../../providers/boardProvider'

const Board = () => {
  const [userLists, setUserLists] = useState([{
    title: "Lista de tareas",
    cards: ["Tarjeta 1", "tarjeta 2"]
  }, {
    title: "En proceso",
    cards: "none"
  }, {
    title: "Hecho",
    cards: "none"
  }]);
  const [newCardTitle, setNewCardTitle] = useState();
  const [newListTitle, setNewListTitle] = useState("");
  const [currentListId, setCurrentListId] = useState("");

  useEffect(() =>{
    //Necesito la info de este tablero:
    //1 Fetch: board GET /show-board/:id
    //Recibo: ¿?
    
    //2 Fetch /lists/:board

    //3 Fetch /cards/:card

  })

  useEffect(() => {

    if (newListTitle) {
      //Preparar info
      userLists.push(newListTitle);
      //Post info: 
      // POST /insert-list
      //req id del board, nombre de la lista
      /*
      { name_: de la lista, fk_id_board: el id del board al que pertenece }
      */
      //res id de lista
      setNewListTitle("")
    }
  }, [newListTitle])

  useEffect(() => {

    userLists.map((element, index) => {
      if (element.title === currentListId) {
        (element.cards === "none") ? element.cards = [newCardTitle] : element.cards.push(newCardTitle);
      }
    })

    //{ name_: de la tarjeta, fk_id_board: el id de la lista}
    //Devolver ID
    setNewCardTitle("");
    setCurrentListId("");

  }, [newCardTitle])


  // useEffect(() => {     // fetch al tablero y sacar datos para pintar y }, [])
  return (
    <div className='board'>
      <AsideBoard />
      <div className='list-container'>
        <LinkNavBoard />
        <br />
        <BoardContext.Provider value={{ newCardTitle, setNewCardTitle, newListTitle, setNewListTitle, userLists, setUserLists, currentListId, setCurrentListId }}>
          <div className='lists-container'>
            {userLists.map((list, index) => (
              <List title={list.title} key={index} cards={list.cards} />
            ))}
            <AddList />
          </div>
        </BoardContext.Provider>
      </div>
    </div>
  )
}

export default Board
