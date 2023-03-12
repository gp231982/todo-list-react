import React, { useState } from "react";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "./Section";
import Tasks from "./Tasks";
import AppHeader from "./AppHeader";
import Container from "./Container";
import TasksSectionNav from "./TasksSectionNav";
import TasksSectionNavHeader from "./TasksSectionNavHeader";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Odbyć podróż dookoła świata", done: false },
    { id: 2, content: "Polecieć samolotem", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const setAllDone = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }

        return task;
      })
    );
  };

  return (
    <Container>
      <AppHeader />
      <Section
        sectionClassName="addTaskSection"
        headerClassName="addTaskSection__header"
        title="Dodaj nowe zadanie"
        extraHeaderContent={null}
        children={<Form />}
      />
      <Section
        sectionClassName="tasksSection"
        extraHeaderContent={
          <TasksSectionNav>
            <TasksSectionNavHeader />
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          </TasksSectionNav>
        }
        children={
          <Tasks
            toggleTaskDone={toggleTaskDone}
            hideDone={hideDone}
            tasks={tasks}
          />
        }
      />
    </Container>
  );
}

export default App;
