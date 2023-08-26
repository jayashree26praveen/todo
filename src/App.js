import { useState } from 'react';
import './App.css';
import InputArea from "./components/inputArea";
import ToDoItem from './components/Todoitem';

function App() {
  const[items, setItems] = useState([])
  const additems = (inputtext)=>
  {
    setItems((prevItems)=>
    {
      return [...prevItems,inputtext]
    })
  };

  const deleteItem =(id)=>{
    setItems((prevItems)=>{
      return prevItems.filter((item,index)=>
      {
        return index!==id;
      });
    });
  };
  console.log(items);
  return (
    <div className="container">
      <div className="heading">
     <h1> Hello World</h1>
    </div>
    <InputArea 
     additems={additems} />
     <div>
      <ul>
        {items.map((item, index) => {
          return(
            <ToDoItem  key={index} text={item} deleteItem={deleteItem}
            id={index}/>
          )
        })}
      </ul>
     </div>

    </div>

  );
}

export default App;
