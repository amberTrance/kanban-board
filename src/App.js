import { useState } from 'react'
import DeleteCardBtn from './DeleteCardBtn'
import SelectList from './SelectList'
import AddCard from './AddCard'
import DeleteListBtn from './DeleteListBtn'
import AddListBtn from './AddListBtn'
import EditCard from './EditCard'

function App() {
  const [inputList, setInputList] = useState([
    {title: '', cards: []}
  ])

  const handleEditListTitle = (e, i) => {
    const list = [...inputList]

    list[i].title = e.target.value

    setInputList(list)
  }

  return (
    <div className="App"
      style={{
        backgroundImage: 'url(/picture.jpg)',
      }}
    >
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
                    <EditCard
                      rows={rows}
                      card={card}
                      i={i} 
                      ind={ind} 
                      inputList={inputList} 
                      setInputList={setInputList}
                    />

                    <DeleteCardBtn 
                      i={i} 
                      ind={ind} 
                      inputList={inputList} 
                      setInputList={setInputList}
                    />

                    <SelectList
                      i={i} 
                      ind={ind} 
                      inputList={inputList} 
                      setInputList={setInputList}
                    />
                  </div>
                )
              })}

              <div className="bottom">
                <AddCard
                  i={i}
                  inputList={inputList} 
                  setInputList={setInputList}
                />
                
              <DeleteListBtn
                i={i}
                inputList={inputList}
                setInputList={setInputList}
              />
              </div>
            </div> 
          )
        })}
      </div>
      <AddListBtn
        inputList={inputList}
        setInputList={setInputList}
      />
    </div>
  )
}

export default App;
