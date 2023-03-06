import "./style.css";
import Buttons from "../Buttons";
import TasksSectionNavHeader from "../TasksSectionNavHeader";

const TasksSectionNav = ({ tasks, toggleDoneSpanTextContent }) => (
  <nav className="tasksSection__navigation">
    <TasksSectionNavHeader />
    <Buttons
      tasks={tasks}
      toggleDoneSpanTextContent={toggleDoneSpanTextContent}
    />
  </nav>
);

export default TasksSectionNav;
