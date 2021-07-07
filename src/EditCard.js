const EditCard = ({rows, card, i, ind, inputList, setInputList}) => {
  
  const handleEditCard = (e, i, ind) => {
    const list = [...inputList]

    list[i]['cards'][ind] = e.target.value

    setInputList(list)
  }
  
  return (  
    <textarea
      rows={rows}
      value={card}
      className="contentInput"
      onChange={(e) => handleEditCard(e, i, ind)}
    />
  )
}
 
export default EditCard;