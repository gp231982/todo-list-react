import "./style.css";
import Tasks from "../Tasks";
import TasksSectionNav from "../TasksSectionNav";

const TasksSection = (props) => (
  <section className="tasksSection">
    <TasksSectionNav
      tasks={props.tasks}
      toggleDoneSpanTextContent={props.toggleDoneSpanTextContent}
    />
    <Tasks tasks={props.tasks} />
  </section>
);

export default TasksSection;
