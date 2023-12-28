import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

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
    <div style={{width:'400px' ,margin:'auto' ,height:'400px' }}>
      
      <div className="input-group">
        <input className="form-control" type="text" value={value} onChange={handleChange} />
        <Button  variant="primary"  className ="lg" onClick={handleList}>Add</Button>

      </div>
      <hr />
      <div>
        <div >
          <h3 className="mt-4" >Total Number of Task : {list.length}</h3>
          { showbutton ? <Button  variant="success" className="mb-2" onClick={showHidebutton}>Hide</Button> :<Button variant="success" className="mb-2" onClick={showHidebutton}>show</Button>}  
        </div>

       
        
        {
          editClick  ?  <div className="input-group">
          <input   className="form-control" type="text" onChange={handleEditInput}/>
          <Button className="mb-2" onClick={()=> updateValue()}>Submit</Button>
          </div> :<div></div>

        }
       
       { showbutton ? <div> {list.map((item, index) => (
          
             <Table striped bordered hover>
        
          <tbody>
            <tr>
              <td> {index + 1}</td>
              <td>{item}</td>
              <td>  <Button variant="warning"  className="me-4" onClick={() => editFromList(index)}>Edit</Button>
            <Button variant="danger" onClick={() => deletefromlist(index)}>Delete</Button></td>
            </tr>
          </tbody>

        </Table> 
   
        ))}</div>   :<div></div>}
      
       
      </div>
    </div>
  );
}

export default TodoApp;
