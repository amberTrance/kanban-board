const DeleteCardBtn = ({i, ind, inputList, setInputList}) => {

  const handleDeleteCard = (e, i, ind) => {
    const list = [...inputList]

    list[i]['cards'].splice(ind, 1)

    setInputList(list)
  }

  return (  
    <button 
      onClick={(e) => handleDeleteCard(e, i, ind)}
      className="deleteCardBtn"
    >Delete</button>
  )
}
 
export default DeleteCardBtn;