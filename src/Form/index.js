import "./style.css";

const Form = () => (
  <form className="form">
    <input
      type="text"
      placeholder="Co jest do zrobienia ? "
      className="form__newTaskInput"
    />
    <button type="submit" className="form__addTaskButton">
      Dodaj zadanie
    </button>
  </form>
);

export default Form;
