import "./style.css";

const AddNewTaskSection = ({form}) => (
  <section className="addTaskSection">
    <h2 className="addTaskSection__header">Dodaj nowe zadanie</h2>
    {form}
  </section>
);

export default AddNewTaskSection;
