const DeleteListBtn = ({i, inputList, setInputList}) => {

  const handleDeleteList = (e, i) => {
    const list = [...inputList]

    list.splice(i, 1)
    
    setInputList(list)
  }

  return (  
    <button 
      onClick={(e) => handleDeleteList(e, i)}
      className="deleteListBtn"
    >Delete List</button>
  )
}
 
export default DeleteListBtn;