import "./style.css";

const checkIcon = <i className="fa-solid fa-check"></i>;

const Tasks = ({ tasks }) => {
  return (
    <ul className="tasksSection__tasksList">
      {tasks.map((task) => (
        <li className="tasksListItem" key={task.id}>
          <button className="tasksListItem__checkButton">
            {task.done ? checkIcon : ""}
          </button>
          <span
            className={`${task.done ? "tasksListItem__contentSpan--done" : ""}
            tasksListItem__contentSpan`}
          >
            {task.content}
          </span>
          <button className="tasksListItem__removeButton">
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
