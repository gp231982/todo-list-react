import "./style.css";
import Buttons from "../Buttons";
import TasksSectionNavHeader from "../TasksSectionNavHeader";

const TasksSectionNav = (props) => (
  <nav className="tasksSection__navigation">
    <TasksSectionNavHeader />
    <Buttons
      tasks={props.tasks}
      toggleDoneSpanTextContent={props.toggleDoneSpanTextContent}
    />
  </nav>
);

export default TasksSectionNav;
