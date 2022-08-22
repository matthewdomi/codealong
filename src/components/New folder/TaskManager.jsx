import React, {useEffect, useState} from "react";
import { v4 as uuid } from "uuid";

import TaskItem from "./TaskItem";
// import background from "../assets/img.jpg";
import useLocalStorage from "../hooks/useLocalStorage";



// const getTasksFromLocalStorage = () => {
//     // get the rasks from local storage
//         const savedTasks = localStorage.getItem("tasks");
//         if (!savedTasks) return [];
//         return JSON.parse(savedTasks);
    // };
    
    function TaskManager () {
    // const [tasks, setTasks] = useState(getTasksFromLocalStorage);
    const {data, setValue} = useLocalStorage("tasks", []);
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input === "") return;

        const newTask = {
            id: uuid(),
            text: input,
            completed: false,
        };
        
        setValue(newTask);
        setInput("");
        };

    //  useEffect(() => {
    //     localStorage.setItem("tasks", JSON.stringify(tasks));
    // }, [tasks]);

    const handleDelete = (id) => {
        const newTask = data.filter((task) => task.id !== id);
        setValue(newTask);
    }


  return (
    
    <div className="h-screen w-screen bg-blue-600 flex justify-center items-center">
      <img src="background" alt="" />
        <div className="max-w-3xl bg-white rounded-xl px-5 py-10 max-h-96">
            <form  
            onSubmit={handleSubmit} 
            className="space-x-5 flex w-[30rem] mb-10">
               
                <input type="text"
                 className="border-2 border-blue-400 p-2 rounded-md outline-none w-10/12" 
                onChange ={(e) => setInput(e.target.value)}
                value={input}

                />
                
                <button type="submit" 
                className="bg-blue-600 text-white text-lg p-5 py-2 px-5 rounded-md"
                disabled={input === ""}
                
                >Add</button>
            </form>

<div className="space-y-2 overflow-y-auto h-56">
        {
            data.map((task) => (
                 <TaskItem task={task} /> 
            ))
        }
     
      
     
            </div>
        </div>
    </div>
  );
}

export default TaskManager;