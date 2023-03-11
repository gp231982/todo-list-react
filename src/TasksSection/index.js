import "./style.css";
import Tasks from "../Tasks";
import TasksSectionNav from "../TasksSectionNav";

const TasksSection = ({
  tasks,
  toggleDoneSpanTextContent,
  hideDone,
  toggleHideDone,
}) => (
  <section className="tasksSection">
    <TasksSectionNav
      tasks={tasks}
      hideDone={hideDone}
      toggleHideDone={toggleHideDone}
      toggleDoneSpanTextContent={toggleDoneSpanTextContent}
    />
    <Tasks tasks={tasks} />
  </section>
);

export default TasksSection;
