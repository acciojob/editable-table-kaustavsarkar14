
import React, { useState } from "react";
import './../styles/App.css';
const allData = [
  {"ID": 1, "name": "John", "age": 25},
  {"ID": 2, "name": "Emily", "age": 30},
  {"ID": 3, "name": "Michael", "age": 22},
  {"ID": 4, "name": "Sophia", "age": 28},
  {"ID": 5, "name": "Daniel", "age": 35}
]

const App = () => {
  const [data, setData]= useState(allData)
  const [rows, setRows] = useState([])
  function handleChangeName(newName, editingElementId){
    setRows([...rows,editingElementId])
     setData(data.map(el=>{
      if(el.ID==editingElementId) return {...el, name: newName}
      return el
     }))
  }
  function saveChange(){
    console.log(rows)
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(el=>(
              <tr>
                <td>{el.ID}</td>
                <td><input type="text" value={el.name} onChange={e=>handleChangeName(e.target.value, el.ID)} /></td>
                <td><input type="number" value={el.age} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <button onClick={saveChange}>Save Changes</button>
    </div>
  )
}

export default App
