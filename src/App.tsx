import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

const tasks1 = [
    {id:1, title: "HTML&CSS", isDone: true},
    {id:2, title: "React", isDone: false},
    {id:3, title: "Js", isDone: true},
    {id:4, title: "RestAPI", isDone: false},
    {id:5, title: "GraphQL", isDone: true}
]

    return (
        <div className="App">
        <Todolist title="What to learn" tasks={tasks1}/>
        </div>
    );
}

export default App;
