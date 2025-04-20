import {readTask, writeTask} from '../utils/file.utils.js';

export const getAllTask = async(req,res)=>{
    if(!req.session.user){
        return res.status(401).json({message: "Please Login"})
    }
    const tasks = await readTask()
    res.json(tasks.filter((task) => task.username === req.session.user.username))
}

export const createTask = async(req,res)=>{
    const {title, description} = req.body
    const tasks = await readTask()

    const newTask = {
        id: Date.now(),
        username: req.session.user.username,
        title,
        description,
        completed: false
    }
    tasks.push(newTask)
    await writeTask(tasks)

    res.status(201).json(newTask)
}
 
export const updateTask = async (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ message: "Please Login" });
    }

    const { id } = req.params;
    const { title, description, completed } = req.body;

    try {
        const tasks = await readTask();
        const index = tasks.findIndex(task => task.id == id && task.username === req.session.user.username);

        if (index === -1) {
            return res.status(404).json({ message: "Task not found" });
        }

        // Update task
        if (title !== undefined) tasks[index].title = title;
        if (description !== undefined) tasks[index].description = description;
        if (completed !== undefined) tasks[index].completed = completed;

        await writeTask(tasks);
        res.json(tasks[index]);
    } catch (err) {
        console.error("Error updating task:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export const deleteTask = async (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ message: "Please Login" });
    }

    const { id } = req.params;

    try {
        const tasks = await readTask();
        const filteredTasks = tasks.filter(task => !(task.id == id && task.username === req.session.user.username));

        if (filteredTasks.length === tasks.length) {
            return res.status(404).json({ message: "Task not found" });
        }

        await writeTask(filteredTasks);
        res.json({ message: "Task deleted successfully" });
    } catch (err) {
        console.error("Error deleting task:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
