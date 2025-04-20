import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTasks, createTask, updateTask, deleteTask } from '../api/tasks';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
      navigate('/login');
    }
  };

  const handleCreate = async (taskData) => {
    try {
      await createTask(taskData);
      fetchTasks();
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  };

  const handleUpdate = async (taskData) => {
    try {
      await updateTask(editingTask.id, taskData);
      setEditingTask(null);
      fetchTasks();
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <h2>{editingTask ? 'Edit Task' : 'Create New Task'}</h2>
      <TaskForm
        onSubmit={editingTask ? handleUpdate : handleCreate}
        initialData={editingTask}
      />
      {editingTask && (
        <button onClick={() => setEditingTask(null)}>Cancel</button>
      )}
      <h2>Your Tasks</h2>
      <TaskList
        tasks={tasks}
        onEdit={setEditingTask}
        onDelete={handleDelete}
      />
    </div>
  );
}