import { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    addNewTask(newTaskContent.trim());
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        type="text"
        placeholder="Co jest do zrobienia ?"
        className="form__newTaskInput"
        onChange={(e) => setNewTaskContent(e.target.value)}
      />
      <button type="submit" className="form__addTaskButton">
        Dodaj zadanie
      </button>
    </form>
  );
};

export default Form;
