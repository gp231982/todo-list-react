import "./style.css";

const Buttons = ({ tasks, toggleDoneSpanTextContent }) =>
  tasks.length > 0 && (
    <>
      <span className="tasksSection__toggleDone">
        {toggleDoneSpanTextContent}
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
