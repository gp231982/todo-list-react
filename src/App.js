import Form from "./Form";
import AddNewTaskSection from "./AddNewTaskSection";
import TasksSection from "./TasksSection";
import AppHeader from "./AppHeader";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Odbyć podróż dookoła świata", done: false },
  { id: 2, content: "Polecieć samolotem", done: true },
];

let toggleDoneSpanTextContent = "Ukryj ukończone";

function App() {
  return (
    <Container>
      <AppHeader />
      <AddNewTaskSection form={<Form />} />
      <TasksSection
        tasks={tasks}
        toggleDoneSpanTextContent={toggleDoneSpanTextContent}
      />
    </Container>
  );
}

export default App;
