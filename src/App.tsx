import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import { v1 } from 'uuid';

export  type FilterValuesType = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Js", isDone: true},
        {id: v1(), title: "RestAPI", isDone: false},
        {id: v1(), title: "GraphQL", isDone: true}
    ]);



    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }
    function addTask(title: string) {
        let task = {id: v1(), title: title, isDone: false}
            let newTasks = [task, ...tasks]
        setTasks(newTasks)
    }

    let [filter, setFilter] = useState<FilterValuesType>("all")

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }
    function changeStatus (id: string, isDone: boolean) {
        let task = tasks.find(t => t.id === id)
        if (task) {
            task.isDone = isDone
            setTasks([...tasks])
        }
    }

    let taskForTodolist = tasks
    if (filter === "active") {
        taskForTodolist = taskForTodolist.filter(t => t.isDone === false)
    }
    if (filter === "completed") {
        taskForTodolist = taskForTodolist.filter(t => t.isDone === true)
    }
    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={taskForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeStatus}
                      filter={filter}
            />
        </div>
    );
}
export default App;
