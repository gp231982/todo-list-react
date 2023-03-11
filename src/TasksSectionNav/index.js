import "./style.css";
import Buttons from "../Buttons";
import TasksSectionNavHeader from "../TasksSectionNavHeader";

const TasksSectionNav = ({
  tasks,
  hideDone,
  toggleHideDone,
  children,
}) => (
  <nav className="tasksSection__navigation">
    <TasksSectionNavHeader />
    <Buttons
      tasks={tasks}
      hideDone={hideDone}
      toggleHideDone={toggleHideDone}
    />
  </nav>
);

export default TasksSectionNav;
