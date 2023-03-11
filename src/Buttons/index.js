import "./style.css";

const Buttons = ({
  tasks,
  hideDone,
  toggleHideDone,
}) =>
  tasks.length > 0 && (
    <>
      <span onClick={toggleHideDone} className="tasksSection__toggleDone">
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </span>
      <span
        className={`tasksSection__finishAll ${
          tasks.every((task) => task.done === true) ? "notActive" : ""
        }`}
      >
        Ukończ wszystkie
      </span>
    </>
  );

export default Buttons;
