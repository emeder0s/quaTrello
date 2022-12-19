import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AsideBoard from './AsideBoard/AsideBoard'
import { CreateBoard } from '../Home/Boards/CreateBoard'
import { LinkNavBoard } from './MenuBoard/LinkNavBoard'
import { AddList } from './ContentBoard/AddList'
import { List } from './ContentBoard/List'
import { BoardContext } from '../../providers/boardProvider'
import { defaultFetch } from '../../helpers/defaultFetch'

const Board = () => {
  const { board } = useParams();
  const [currentBoard, serCurrentBoard] = useState([]);
  const [userLists, setUserLists] = useState([]);
  const [newCardTitle, setNewCardTitle] = useState([]);
  const [newList, setNewList] = useState("");
  const [currentListId, setCurrentListId] = useState("");

  useEffect(() => {
    //Info del tablero - para colores, etc.
    fetch(`/show-board/${board}`).then((res) => res.json())
      .then((res) => {
        serCurrentBoard(res);
      })

    //Listas y sus tarjetas
    fetch(`/lists/${board}`).then((res) => res.json())
      .then((res) => {
        setUserLists(res);
      })
  }, [])

  useEffect(() => {

    if (newList) {
      defaultFetch("http://localhost:5000/insert-list", "POST", newList).then((res) => { console.log(res) });
      //Listas y sus tarjetas
      fetch(`/lists/${board}`).then((res) => res.json())
        .then((res) => {
          setUserLists(res);
        })
    }
  }, [newList])

  useEffect(() => {
    if (newCardTitle) {
      defaultFetch("http://localhost:5000/insert-card", "POST", newCardTitle).then((res) => { console.log(res) });
       //Listas y sus tarjetas
       fetch(`/lists/${board}`).then((res) => res.json())
       .then((res) => {
         setUserLists(res);
       })
    }

  }, [newCardTitle])


  return (
    <div className='board'>
      <AsideBoard />
      <div className='list-container'>
        <LinkNavBoard />
        <br />
        <BoardContext.Provider value={{
          newCardTitle, setNewCardTitle,
          newList, setNewList,
          userLists, currentListId, setCurrentListId
        }}>
          <div className='lists-container'>
            {userLists.map((list, index) => (
              <List title={list.name_} key={list.name_} cards={list.cards} listId={list.id} />
            ))}
            <AddList />
          </div>
        </BoardContext.Provider>
      </div>
    </div>
  )
}

export default Board

