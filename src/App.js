import { useState } from 'react'

function App() {
  const [inputList, setInputList] = useState([
    []
  ])
  // [ [a,a,a,a,a], [df,fdf,fdfd,fdfd]]

  const handleAddCard = (e,i) => {
    const list = [...inputList]

    list[i].push(e.target.parentNode.firstChild.value)

    e.target.parentNode.firstChild.value = ''

    setInputList(list)
  }

  const handleAddList = (e) => {
    const list = [...inputList]

    list.push([])

    setInputList(list)
  }

  const handleDeleteCard = (e,i,ind) => {
    const list = [...inputList]

    list[i].splice(ind, 1)

    setInputList(list)
  }

  const handleEditCard = (e,i) => {
    
  }

  return (
    <div className="App">
      <div className="lists">
        { inputList.map((list, i) => {
          return (
            <div className="list-box" key={`list${i+1}`}>
              { list.map((card, ind) => {
                return (
                  <div className="card" key={`card${ind+1}`}>
                    <p>{card}</p>
                    <button onClick={(e) => handleDeleteCard(e,i,ind)}>Delete</button>
                    <button onClick={(e) => handleEditCard(e,i,ind)}>Edit</button>
                  </div>
                )
              })}

              <div>
                <input type="text" placeholder="Add another card"/>
                <button onClick={(e) => handleAddCard(e,i)}>Add Card</button>
              </div>
            </div> 
          )
        })}
      </div>
      <button onClick={(e) => handleAddList(e)}>Add New List</button>
    </div>
  )
}

export default App;
