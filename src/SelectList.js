const SelectList = ({i, ind, inputList, setInputList}) => {

  const handleSelect = (e, i, ind) => {
    
    if (e.target.value !== 'none') {
      const list = [...inputList]

      list[e.target.value]['cards'].push(list[i]['cards'][ind])
      list[i]['cards'].splice(ind, 1)
      setInputList(list)
    }
  }

  return (  
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
  )
}
 
export default SelectList;