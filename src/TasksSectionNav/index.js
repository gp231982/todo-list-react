import "./style.css";
import Buttons from "../Buttons";
import TasksSectionNavHeader from "../TasksSectionNavHeader";

const TasksSectionNav = ({
  tasks,
  toggleDoneSpanTextContent,
  hideDone,
  toggleHideDone,
}) => (
  <nav className="tasksSection__navigation">
    <TasksSectionNavHeader />
    <Buttons
      tasks={tasks}
      hideDone={hideDone}
      toggleHideDone={toggleHideDone}
      toggleDoneSpanTextContent={toggleDoneSpanTextContent}
    />
  </nav>
);

export default TasksSectionNav;
