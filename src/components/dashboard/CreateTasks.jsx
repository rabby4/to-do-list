import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';

const CreateTasks = ({ tasks, setTasks }) => {
    // const [task, setTask] = useState({
    //     id: '',
    //     name: '',
    //     status: 'todo'
    // })
    const [task, setTask] = useState({})

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        setTask(data)
        setTasks((prev) => {
            const list = [...prev, task]

            // set localStorage
            localStorage.setItem("tasks", JSON.stringify(list))
            return list
        })
        toast.success('task created')
    }

    // console.log(task)
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     if (task.name.length < 3) {
    //         return toast.error("name should at least 3 character")
    //     }
    //     setTasks((prev) => {
    //         const list = [...prev, task]

    // set localStorage
    //         localStorage.setItem("tasks", JSON.stringify(list))


    //         return list
    //     })
    //     toast.success('task created')
    // }
    return (
        <>
            <div className="w-full px-24">
                {/* <form onSubmit={handleSubmit}>
                    <input type="text" name="" id="" className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-0"
                        onChange={(e) => setTask({ ...task, id: uuidv4(), name: e.target.value })}
                        value={task.name} />

                    <button className="bg-cyan-500 rounded-md px-4 h-12 text-white">Create</button>
                </form> */}
                <section className="w-full">
                    <div className="w-full">
                        <div className='text-center'>
                            <h1 className="text-6xl font-bold capitalize my-10">Register Now</h1>
                        </div>
                        <div className=" mx-auto card shadow-lg mb-14">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="flex justify-between gap-5">
                                    <div className="form-control mb-2 w-1/2">
                                        <label className="label">
                                            <span className="label-text font-medium text-lg">Title</span>
                                        </label>
                                        <input {...register("title")} onChange={(e) => setTask({ ...task, id: uuidv4(), name: e.target.value })}
                                            value={task.name} type="text" placeholder="Title..." className="input input-bordered" />
                                    </div>
                                    <div className="form-control mb-2 w-1/2">
                                        <label className="label">
                                            <span className="label-text font-medium text-lg">Priority</span>
                                        </label>
                                        <select {...register("priority")} className="select select-bordered text-lg">
                                            <option value="low">Low</option>
                                            <option value="moderate">Moderate</option>
                                            <option value="high">High</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-control mb-2">
                                    <label className="label">
                                        <span className="label-text font-medium text-lg">Description</span>
                                    </label>
                                    <textarea {...register("description", { required: true })} placeholder="Descriptions..." className="textarea textarea-bordered h-24" />
                                </div>

                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text font-medium text-lg">Password</span>
                                    </label>
                                    <div className="relative">
                                        <input {...register("password", { required: true })} type='password' placeholder="Password" className="input input-bordered relative w-full" />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <button className="btn bg-[#f96a74] hover:bg-[#ff545f] text-white text-lg uppercase">Registration</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
};

export default CreateTasks;