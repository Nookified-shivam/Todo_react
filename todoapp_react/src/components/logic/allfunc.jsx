import { useState } from "react";
const useTodo = () => {
    const [Currval, setCurrval] = useState("");
    const [Task, setTask] = useState([]);
    const [EditIndex, setEditIndex] = useState(null);
    const [editText, seteditText] = useState("");
    const Additems = (e) => {
        if (Currval.trim() == "") return;
        setTask((T) => [...T, Currval]);
        setCurrval("");
    }
    const Removeitems = (index) => {
        setTask(Task.filter((T, i) => i !== index))
    }
    const Doubleclick = (index) => {
        setEditIndex(index);
        seteditText(Task[index]);
    }
    const EditTask = (e, index) => {
        if (e.key === "Enter") {
            const updatedTasks = [...Task];
            updatedTasks[index] = editText;
            setTask(updatedTasks);
            setEditIndex(null);
        }
    }
    const values = { Currval, setCurrval, Task, setTask, editText, seteditText, EditIndex, setEditIndex, Additems, Removeitems, Doubleclick, EditTask }
    return values;
}
export default useTodo;