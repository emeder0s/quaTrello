import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AsideBoard from './AsideBoard/AsideBoard'
import { CreateBoard } from '../Boards/CreateBoard'
import { LinkNavBoard } from './MenuBoard/LinkNavBoard'
import { AddList } from './ContentBoard/AddList'
import { List } from './ContentBoard/List'
import { BoardContext } from '../../providers/boardProvider'
import { defaultBoard } from '../../helpers/defaultBoard'
import { defaultLists } from '../../helpers/defaultLists'
import { defaultCards } from '../../helpers/defaultCard'
import { defaultFetch, getFetch } from '../../helpers/defaultFetch'
import { sortData } from '../../helpers/boardStart'

const Board = () => {
  const { board } = useParams();
  const [idPrueba, setIdPrueba] = useState(3);
  const [cards, setCards] = useState(defaultCards);
  const [userLists, setUserLists] = useState([]);
  const [newCardTitle, setNewCardTitle] = useState([]);
  const [newList, setNewList] = useState("");
  const [currentListId, setCurrentListId] = useState("");
  var cardIds = []

  useEffect(() => {
    //Info del tablero - para colores, etc.
    //const currentBoard = getFetch(`/show-board/${board}`,'GET',"nada")

    //Listas
    //getFetch(`/lists/${board}`,'GET',"nada").then((res) => {setUserLists(res)})
    setUserLists(defaultLists);
    console.log(userLists)
   
  }, [])

  useEffect(() => {

    if (newList) {
      defaultFetch("http://localhost:5000/insert-list", "POST", newList).then((res) => {console.log(res)});
      ////getFetch(`/lists/${board}`,'GET',"nada").then((res) => {setUserLists(res)})
    var listaPrueba= {
      "id": idPrueba,
      "name_": "nueva lista",
      "fk_id_board": 1,
      "cards": []
  }
      
    defaultLists.push(listaPrueba);
      setUserLists(defaultLists);
      setIdPrueba(idPrueba+1)
      setNewList("")
      console.log(userLists)
    }
  }, [newList])

  useEffect(() => {
    if (newCardTitle) {
      //defaultFetch("http://localhost:5000/insert-card", "POST", newList).then((res) => {console.log(res)});
      ////getFetch(`/lists/${board}`,'GET',"nada").then((res) => {setUserLists(res)})
    var cardPrueba=   {
      "id": 7,
      "title": "Segunda tarjeta",
      "description_": null,
      "checklist": null,
      "configuration": null,
      "date_": null,
      "fk_id_list": 1
  }
  setIdPrueba(idPrueba+1)
  console.log(newCardTitle.fk_id_list)
  console.log(defaultLists)
  console.log(defaultLists[newCardTitle.fk_id_list-1])
  //defaultLists[newCardTitle.fk_id_list-1].cards.push(cardPrueba)
  //setUserLists(defaultLists);
  //setNewCardTitle([])

  console.log(userLists)


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
              <List title={list.name_} key={list.name_} cards={list.cards} listId={list.id}/>
            ))}
            <AddList />
          </div>
        </BoardContext.Provider>
      </div>
    </div>
  )
}

export default Board

