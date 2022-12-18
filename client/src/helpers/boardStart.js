export const sortData = (lists,cards) => {
    let cardList = [],  cardIds = [], userLists=[];
    lists.map(list => {
       
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

      console.log(userLists)
      return [userLists, cardIds]
}