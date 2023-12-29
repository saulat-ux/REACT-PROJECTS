import { useState } from "react"
import data from "./data"
import './style.css'


const Index = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(null)
  const [multiple, setMultiple] = useState([])

  function handleSingleSelection(currentID) {

    setSelected(currentID === selected ? null : currentID)
  }
  
  function handleMultiSelection(currentID) {
    let cpyMultiple = [...multiple]
    const findIndexOfCurrentID = cpyMultiple.indexOf(currentID)

    if(findIndexOfCurrentID===-1){
      cpyMultiple.push(currentID) 
    }

    else{
      cpyMultiple.splice(findIndexOfCurrentID, 1)
    }
    setMultiple(cpyMultiple)
    console.log(findIndexOfCurrentID)
  }
  
  console.log(selected , multiple)
  return (
    <div className='wrapper'>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable multi Selection</button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item , i) => (
            <div className="item" key={i}>
              <div onClick={ enableMultiSelection ?
                   ()=> handleMultiSelection(item.id)
                 : () => handleSingleSelection(item.id)} className="title">
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiSelection ? multiple.indexOf(item.id) !== -1 && (
                  <div className="content">{item.answer}</div>
                ) : selected === item.id && (
                  <div className="content">{item.answer}</div>
                )
              }
             
            </div>
          ))

        ) : (<div>No data found</div>)}
      </div>
    </div>
  )
}

export default Index