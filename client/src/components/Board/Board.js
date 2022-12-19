import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AsideBoard from './AsideBoard/AsideBoard'
import { CreateBoard } from '../Home/Boards/CreateBoard'
import { LinkNavBoard } from './MenuBoard/LinkNavBoard'
import { AddList } from './ContentBoard/AddList'
import { List } from './ContentBoard/List'
import { BoardContext } from '../../providers/boardProvider'
import { defaultBoard } from '../../helpers/defaultBoard'
import { defaultLists, defaultListsPrueba } from '../../helpers/defaultLists'
import { defaultCards } from '../../helpers/defaultCard'
import { defaultFetch, getFetch } from '../../helpers/defaultFetch'
import { sortData } from '../../helpers/boardStart'

const Board = () => {
  const { board } = useParams();
  const [lists, setLists] = useState(defaultListsPrueba);
  const [cards, setCards] = useState(defaultCards);
  const [userLists, setUserLists] = useState([]);
  const [newCardTitle, setNewCardTitle] = useState([]);
  const [newListTitle, setNewListTitle] = useState("");
  const [currentListId, setCurrentListId] = useState("");
  var cardIds = []

  useEffect(() => {
    //Info del tablero - para colores, etc.
    //const currentBoard = getFetch(`/show-board/${board}`,'GET',"nada")

    //Listas
    //const currentLists = getFetch(`/listas/${board}`,'GET',"nada")
    if (lists.length === 0) {
      defaultLists.map(element => {
        // const res = defaultFetch('/insert-list',"POST",element)
      })
    }

    //3 Fetch /cards/:card
    /*
        lists.map(element => {
          //const res = defaultFetch(`/cards/${element.id}`,"GET",element)
        })
    */

    if (userLists.length === 0) {
      let data = sortData(lists,cards);
    
      lists.map(list => {
        let cardList = [];
        cards.map(card => {
          if (card.fk_id_list === list.id) {
            cardList.push(card.title)
            cardIds.push(card.id)
          }
        })
        userLists.push({
          id: list.id,
          title: list.name_,
          cards: cardList
        })
        cardList = []
      })
    }
 console.log(lists)
 console.log(cards)
  }, [])

  useEffect(() => {


    //Post info: 
      // POST /insert-list
      //req id del board, nombre de la lista
      //     { name_: de la lista, fk_id_board: el id del board al que pertenece }

    //setUserLists([]);
    if (newListTitle) {
      //Preparar info
      
      lists.push(newListTitle);
      let data = sortData(lists,cards);
      setUserLists(data[0])
      cardIds = data[1]
      setNewListTitle("")
      console.log(userLists)

    }
  }, [newListTitle])

  useEffect(() => {

    //{ name_: de la tarjeta, fk_id_board: el id de la lista}
    //Devolver ID
    if (newCardTitle) {   
      cards.push(newCardTitle);
      console.log(cards)
      console.log(lists)
      let data = sortData(lists,cards);
        setUserLists(data[0])
        cardIds = data[1]
      setNewCardTitle("");
      setCurrentListId("");}
 

  }, [newCardTitle])


  return (
    <div className='board'>
      <AsideBoard />
      <div className='list-container'>
        <LinkNavBoard />
        <br />
        <BoardContext.Provider value={{
          newCardTitle, setNewCardTitle,
          newListTitle, setNewListTitle,
          userLists, currentListId, setCurrentListId
        }}>
          <div className='lists-container'>
            {userLists.map((list, index) => (
              <List title={list.title} key={index} cards={list.cards} cardIds={cardIds} listId={list.id}/>
            ))}
            <AddList />
          </div>
        </BoardContext.Provider>
      </div>
    </div>
  )
}

export default Board

