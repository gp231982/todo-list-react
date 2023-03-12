import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) =>
  tasks.length > 0 && (
    <>
      <button onClick={toggleHideDone} className="buttons buttons__toggleDone">
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className={`buttons buttons__finishAll ${
          tasks.every((task) => task.done === true) ? "notActive" : ""
        }`}
      >
        Ukończ wszystkie
      </button>
    </>
  );

export default Buttons;
