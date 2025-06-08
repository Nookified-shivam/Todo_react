import { useState } from "react"
import useTodo from "./logic/allfunc";
import "../todo.css"
function Todo() {
    const {Currval, setCurrval, Task, setTask, editText, seteditText, 
        EditIndex, setEditIndex, Additems, Removeitems, Doubleclick, EditTask}=useTodo();
    return (
        <div className="todo">
            <h1>MY TODO APP</h1>
            <ul className="list">
                {
                    Task.map((T,index)=>(
                        <li className="list-item" key={index}>
                        {EditIndex===index?(
                        <input 
                        type="text" 
                        autoFocus
                        className="edit-item" 
                        onKeyDown={(e)=>{EditTask(e,index)}} 
                        value={editText} 
                        onChange={(e)=>seteditText(e.target.value) }/>)
                        : (<div className="item">
                            <p onDoubleClick={()=>Doubleclick(index)}>
                                {T}
                                </p>
                                <button className="delete" onClick={()=>Removeitems(index)}>Delete</button>
                                </div>
                    )}
                 </li>
                    ))}
            </ul>
          <div className="info"> <input type="text" className="input" placeholder="Enter todo..." value={Currval} onChange={(e) => setCurrval(e.target.value)} />
            <button className="btn" type="submit" onClick={() => Additems()}>submit</button>
        </div>
        </div>
    )
}
export default Todo;