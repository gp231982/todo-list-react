import Form from "./Form";
import AddNewTaskSection from "./AddNewTaskSection";
import TasksSection from "./TasksSection";
import AppHeader from "./AppHeader";

const tasks = [
  { id: 1, content: "Nakarmić rybki", done: false },
  { id: 2, content: "Polecieć samolotem", done: true },
];

let toggleDoneSpanTextContent = "Ukryj ukończone";

function App() {
  return (
    <div className="tasksListAppContainer">
      <AppHeader />
      <AddNewTaskSection form={<Form />} />
      <TasksSection
        tasks={tasks}
        toggleDoneSpanTextContent={toggleDoneSpanTextContent}
      />
    </div>
  );
}

export default App;
