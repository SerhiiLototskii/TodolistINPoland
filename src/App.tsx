import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export  type FilterValuesType = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "React", isDone: false},
        {id: 3, title: "Js", isDone: true},
        {id: 4, title: "RestAPI", isDone: false},
        {id: 5, title: "GraphQL", isDone: true}
    ]);

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    let [filter, setFilter] = useState<FilterValuesType>("all")

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
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
            />
        </div>
    );
}

export default App;
