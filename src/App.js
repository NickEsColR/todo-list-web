import "semantic-ui-css/semantic.min.css";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { useEffect, useState } from "react";
import { TaskContent } from "./components/TaskContent";

function App() {
  let initialTasks = JSON.parse(localStorage.getItem("tasks"));

  if (!initialTasks) {
    initialTasks = [];
  }

  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    if (initialTasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  }, [tasks, initialTasks]);

  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.idTask !== id);
    setTasks(newTasks);
  }

  return (
    <Container>
      <Header />
      <InputTask createTask={createTask} />
      <TaskContent tasks={tasks} deleteTask={deleteTask}/>
    </Container>
  );
}

export default App;
