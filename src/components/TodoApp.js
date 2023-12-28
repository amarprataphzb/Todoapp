import React, { useState } from "react";

function TodoApp() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const[index,setIndex]=useState()
  const[editValue,setEditValue]=useState('')
  const[editClick,seteditClick]=useState(false)
  const[showbutton,setShowButton]=useState(false)
  const[showtodo,setShowtodo]=useState(false)

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleList(e) {
    setList([...list, value]);
    setValue("");
  }

  function deletefromlist(index) {

    let newList = [];
    newList = list.filter((item) => {
      return item !== list[index];
    });
    setList([...newList]);
  }

  function editFromList(index) {
     seteditClick(!editClick)
     setIndex(index)
  }

   function handleEditInput(e){
      setEditValue(e.target.value)
   }

  function updateValue(){
    list[index]=editValue;
    setList([...list]);
    seteditClick(false)
  }

  function showHidebutton(){
    setShowButton(!showbutton)
    setShowtodo(!showtodo)
  }
 
  

  return (
    <div>
      <div>
        <input type="text" value={value} onChange={handleChange} />
        <button onClick={handleList}>Add</button>
      </div>

      <div>
        <div>
          <h3>Total Number of Task : {list.length}</h3>
          { showbutton ? <button onClick={showHidebutton}>Hide</button> :<button onClick={showHidebutton}>show</button>}
         
          
        </div>
        {
          editClick  ?  <div>
          <input type="text" onChange={handleEditInput}/>
          <button onClick={()=> updateValue()}>Submit</button>
          </div> :<div></div>

        }
       
       { showbutton ? <div> {list.map((item, index) => (
          <div>
            {index + 1}.  {item}
            <button onClick={() => editFromList(index)}>Edit</button>
            <button onClick={() => deletefromlist(index)}>Delete</button>
          </div>
        ))}</div>   :<div></div>}
      
       
      </div>
    </div>
  );
}

export default TodoApp;
