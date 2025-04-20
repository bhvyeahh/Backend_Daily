export default function TaskList({ tasks, onEdit, onDelete }) {
    return (
      <div>
        {tasks.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
                <button onClick={() => onEdit(task)}>Edit</button>
                <button onClick={() => onDelete(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }