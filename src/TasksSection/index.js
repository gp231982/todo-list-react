import "./style.css";
import Tasks from "../Tasks";
import TasksSectionNav from "../TasksSectionNav";

const TasksSection = ({ tasks, toggleDoneSpanTextContent }) => (
  <section className="tasksSection">
    <TasksSectionNav
      tasks={tasks}
      toggleDoneSpanTextContent={toggleDoneSpanTextContent}
    />
    <Tasks tasks={tasks} />
  </section>
);

export default TasksSection;
