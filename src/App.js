import { useState } from 'react'

function App() {
  const [inputList, setInputList] = useState([])

  const handleAddCard = (e) => {
    const list = [...inputList]

    list.push(e.target.parentNode.firstChild.value)

    setInputList(list)
  }

  return (
    <div className="App">
      <div className="list-box">
        { inputList.length > 0 && inputList.map((card, i) => {
          return (
            <div>{card}</div>
          )
        })}
        <div>
          <input type="text" placeholder="Add another card"/>
          <button onClick={(e) => handleAddCard(e)}>Add Card</button>
        </div>
      </div>
    </div>
  )
}

export default App;
