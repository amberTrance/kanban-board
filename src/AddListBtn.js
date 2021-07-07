const AddListBtn = ({inputList, setInputList}) => {

  const handleAddList = (e) => {
    const list = [...inputList]

    list.push({title: '', cards: []})

    setInputList(list)
  }

  return (  
    <button 
      onClick={(e) => handleAddList(e)}
      className="addListBtn"
    >Add New List</button>
  )
}
 
export default AddListBtn;