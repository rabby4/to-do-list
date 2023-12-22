import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import toast from "react-hot-toast";
import { RxCrossCircled } from "react-icons/rx";

const ListTasks = ({ tasks, setTasks }) => {
    const [toDos, setToDos] = useState([])
    const [inProgress, setInProgress] = useState([])
    const [closed, setClosed] = useState([])

    useEffect(() => {
        const fToDos = tasks.filter((task) => task.status === 'todo')
        const fInProgress = tasks.filter((task) => task.status === 'inprogress')
        const fClosed = tasks.filter((task) => task.status === 'closed')

        setToDos(fToDos);
        setInProgress(fInProgress)
        setClosed(fClosed)

    }, [tasks])

    const statuses = ['todo', 'inprogress', 'closed']

    return (
        <>
            <div className="flex justify-between gap-10 text-center w-full">
                {
                    statuses.map((status, index) => <Section key={index} status={status} tasks={tasks} setTasks={setTasks} toDos={toDos} inProgress={inProgress} closed={closed} ></Section>)
                }
            </div>
        </>
    );
};

export default ListTasks;


const Section = ({ status, tasks, setTasks, toDos, inProgress, closed }) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    let text = 'Todo List'
    let bg = 'bg-slate-500'
    let tasksToMap = toDos

    if (status === 'inprogress') {
        text = "On Going List"
        bg = "bg-purple-500"
        tasksToMap = inProgress
    }
    if (status === 'closed') {
        text = "Completed List"
        bg = "bg-green-500"
        tasksToMap = closed
    }

    const addItemToSection = (id) => {
        setTasks(prev => {
            console.log("previous", prev)
            const mTasks = prev.map(task => {
                if (task.id === id) {
                    return { ...task, status: status }
                }
                return task
            })
            localStorage.setItem("tasks", JSON.stringify(mTasks))
            toast.success('Task status changed')
            return mTasks
        })
    }

    return (
        <>
            <div ref={drop} className={`w-full rounded-md ${isOver ? 'bg-slate-200' : ''}`}>
                <Header text={text} bg={bg} count={tasksToMap.length}></Header>
                <div className="text-left">
                    {
                        tasksToMap.length > 0 && tasksToMap.map(task => <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks}></Task>)
                    }
                </div>
            </div>
        </>
    );
};
const Header = ({ text, bg, count }) => {
    return (
        <>
            <div>
                <h2 className={`${bg} py-3 rounded text-white uppercase`} >{text} {count}</h2>
            </div>
        </>
    );
};

const Task = ({ task, tasks, setTasks }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: { id: task.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    console.log(isDragging)

    const handleRemove = (id) => {
        console.log(id)
        const fTasks = tasks.filter(task => task.id !== id)
        localStorage.setItem('tasks', JSON.stringify(fTasks))
        setTasks(fTasks)
        toast.success('Task successfully removed')
    }

    return (
        <>
            <div ref={drag} className={`flex justify-between items-center p-4 mt-4 shadow-md rounded-md cursor-grabbing ${isDragging ? 'opacity-30' : 'opacity-100'}`}>
                <p>{task.name}</p>
                <button onClick={() => handleRemove(task.id)}><RxCrossCircled className="text-lg"></RxCrossCircled></button>
            </div>
        </>
    );
};