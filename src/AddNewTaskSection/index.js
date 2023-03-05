import "./style.css";

const AddNewTaskSection = (props) => (
  <section className="addTaskSection">
    <h2 className="addTaskSection__header">Dodaj nowe zadanie</h2>
    {props.form}
  </section>
);

export default AddNewTaskSection;
