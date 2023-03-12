import React, { useState } from "react";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "./Section";
import Tasks from "./Tasks";
import AppHeader from "./AppHeader";
import Container from "./Container";
import TasksSectionNav from "./TasksSectionNav";
import TasksSectionNavHeader from "./TasksSectionNavHeader";

const tasks = [
  { id: 1, content: "Odbyć podróż dookoła świata", done: false },
  { id: 2, content: "Polecieć samolotem", done: true },
];

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
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
            />
          </TasksSectionNav>
        }
        children={<Tasks hideDone={hideDone} tasks={tasks} />}
      />
    </Container>
  );
}

export default App;
