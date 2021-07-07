import { useState } from 'react'
import DeleteCardBtn from './DeleteCardBtn'

function App() {
  const [inputList, setInputList] = useState([
    {title: '', cards: []}
  ])

  const handleAddCard = (e, i) => {
    let value = e.target.parentNode.firstChild.value

    if (value !== '') {
      const list = [...inputList]

      list[i]['cards'].push(value)

      e.target.parentNode.firstChild.value = ''

      setInputList(list)
    }
  }

  const handleCardEnter = (e, i) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      const list = [...inputList]

      list[i]['cards'].push(e.target.value)

      e.target.value = ''

      setInputList(list)
    }
  }

  const handleAddList = (e) => {
    const list = [...inputList]

    list.push({title: '', cards: []})

    setInputList(list)
  }

  const handleEditCard = (e, i, ind) => {
    const list = [...inputList]

    list[i]['cards'][ind] = e.target.value

    setInputList(list)
  }

  const handleEditListTitle = (e, i) => {
    const list = [...inputList]

    list[i].title = e.target.value

    setInputList(list)
  }

  const handleDeleteList = (e, i) => {
    const list = [...inputList]

    list.splice(i, 1)
    
    setInputList(list)
  }

  const handleSelect = (e, i, ind) => {
    
    if (e.target.value !== 'none') {
      const list = [...inputList]

      list[e.target.value]['cards'].push(list[i]['cards'][ind])
      list[i]['cards'].splice(ind, 1)
      setInputList(list)
    }
  }

  return (
    <div className="App">
      <div className="lists">
        { inputList.map((list, i) => {
          return (
            <div className="list-box" key={`list${i+1}`}>
              <input 
                type="text" 
                placeholder="Write title here"
                className="listTitle"
                value={inputList[i].title}
                onChange={(e) => handleEditListTitle(e, i)}
              />
              { list['cards'].map((card, ind) => {
                // Dynamically add a row for each 40 characters
                let rows = Math.ceil(card.length / 40)
                return (
                  <div className="card" key={`card${ind+1}`}>
                    <textarea
                      rows={rows}
                      value={card}
                      className="contentInput"
                      onChange={(e) => handleEditCard(e, i, ind)}
                    />
                    <DeleteCardBtn i={i} ind={ind} inputList={inputList} setInputList={setInputList}/>

                    <select
                      className="move"
                      onChange={(e) => handleSelect(e, i, ind)}
                    >
                      <option value={"none"}>move</option>
                      {inputList
                        .filter(card => card.title !== '')
                        .map((card, indx) => {
                          if (i === indx) return false
                          return (
                            <option
                              key={`title${indx + 1}`}
                              value={indx}
                              name={card.title}
                            >
                              {card.title}
                            </option>
                          )
                        })}
                    </select>
                  </div>
                )
              })}

              <div className="bottom">
                <input 
                  type="text" 
                  placeholder="Add another card"
                  className="addCardInput"
                  onKeyDown={(e) => handleCardEnter(e, i)}
                />
                <button 
                  onClick={(e) => handleAddCard(e, i)}
                  className="addCardBtn"
                >Add Card</button>
                
                <button 
                  onClick={(e) => handleDeleteList(e, i)}
                  className="deleteListBtn"
                >Delete List</button>
              </div>
            </div> 
          )
        })}
      </div>
      <button 
        onClick={(e) => handleAddList(e)}
        className="addListBtn"
      >Add New List</button>
    </div>
  )
}

export default App;
