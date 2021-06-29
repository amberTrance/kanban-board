import { useState } from 'react'

function App() {
  const [inputList, setInputList] = useState([
    [{title: ''}]
  ])

  const handleAddCard = (e, i) => {
    const list = [...inputList]

    list[i].push(e.target.parentNode.firstChild.value)

    e.target.parentNode.firstChild.value = ''

    setInputList(list)
  }

  const handleAddList = (e) => {
    const list = [...inputList]

    list.push([{title: ''}])

    setInputList(list)
  }

  const handleDeleteCard = (e, i, ind) => {
    const list = [...inputList]

    list[i].splice(ind, 1)

    setInputList(list)
  }

  const handleEditCard = (e, i, ind) => {
    const list = [...inputList]

    list[i][ind] = e.target.value

    setInputList(list)
  }

  const handleEditListTitle = (e, i) => {
    const list = [...inputList]

    list[i][0].title = e.target.value

    setInputList(list)
  }

  const handleDeleteList = (e, i) => {
    const list = [...inputList]

    list.splice(i, 1)
    
    setInputList(list)
  }

  const handleSelect = (e, i, ind) => {
    const list = [...inputList]

    list[e.target.value].push(list[i][ind])

    list[i].splice(ind, 1)

    setInputList(list)
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
                onChange={(e) => handleEditListTitle(e, i)}
              />
              { list.map((card, ind) => {
                return (
                  <div>
                    {ind !== 0 && 
                    <div className="card" key={`card${ind+1}`}>
                      <span
                        role="textbox"
                        contentEditable
                        className="contentInput"
                        onChange={(e) => handleEditCard(e, i, ind)}
                      >{card}</span>
                      <button 
                        onClick={(e) => handleDeleteCard(e, i, ind)}
                        className="deleteCardBtn"
                      >Delete</button>

                      <select
                          className="move dropdown"
                          onChange={(e) => handleSelect(e, i, ind)}
                        >
                          <option value={"none"}>move</option>
                          {inputList.map((card, i) => {
                            return (
                              <option
                                key={`title${i + 1}`}
                                value={i}
                                name={card[0].title}
                              >
                                {card[0].title}
                              </option>
                            );
                          })}
                      </select>

                    </div>}
                  </div>
                )
              })}

              <div className="bottom">
                <input 
                  type="text" 
                  placeholder="Add another card"
                  className="addCardInput"
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
