import { useEffect, useState } from "react";
import CreateTasks from "./CreateTasks";
import ListTasks from "./ListTasks";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const ToDoList = () => {
    const [tasks, setTasks] = useState([])

    console.log('task', tasks)

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem("tasks")))
    }, [])

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div className="flex flex-col items-center gap-10">
                    <CreateTasks tasks={tasks} setTasks={setTasks}></CreateTasks>
                    <ListTasks tasks={tasks} setTasks={setTasks}></ListTasks>
                </div>
            </DndProvider>
        </>
    );
};

export default ToDoList;