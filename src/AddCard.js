import { Fragment } from 'react'

const AddCard = ({i, inputList, setInputList}) => {

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

  return (  
    <Fragment>
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
    </Fragment>
  )
}
 
export default AddCard;