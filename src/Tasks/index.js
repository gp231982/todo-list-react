import "./style.css";

const Tasks = ({ tasks, hideDone, toggleTaskDone, removeTask }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        className={`tasks__listItem ${hideDone && task.done ? "hidden" : null}`}
        key={task.id}
      >
        <button
          onClick={() => {
            toggleTaskDone(task.id);
          }}
          className="tasks__button tasks__button--toggleDone"
        >
          {task.done ? <i className="fa-solid fa-check"></i> : null}
        </button>
        <span
          className={`${task.done ? "tasks__content--done" : null}
            tasks__content`}
        >
          {task.content}
        </span>
        <button
          onClick={() => removeTask(task.id)}
          className="tasks__button tasks__button--remove"
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
