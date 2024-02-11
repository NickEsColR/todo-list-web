import { useState } from "react";
import { Select, Input, Button, Grid, Header, Icon } from "semantic-ui-react";
import {v4 as uuidv4} from 'uuid';

const options = [
  { key: "d", text: "Deporte", value: "deporte" },
  { key: "c", text: "Casa", value: "casa" },
  { key: "t", text: "Trabajo", value: "trabajo" },
  { key: "e", text: "Estudios", value: "estudios" },
  { key: "p", text: "Personal", value: "personal" },
];

export const InputTask = ({createTask}) => {
  const [task, setTask] = useState({
    idTask: "",
    taskName: "",
    categoryTask: "",
  });
  const [error, setError] = useState(false);

  const onChangeTask = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeCategory = (e, data) => {
    setTask({
      ...task,
      categoryTask: data.value,
    });
  }

  const onSubmitTask = (e) => {
    e.preventDefault();
    if (task.taskName.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    task.idTask = uuidv4();
    
    createTask(task);

    setTask({
      idTask: "",
      taskName: "",
      categoryTask: "",
    });
  }

  return (
    <>
      <Grid centered columns={2}>
        <Input type="text" action>
          <Input
            size="small"
            icon="add"
            placeholder="Escribe tu tarea..."
            iconPosition="left"
            name="taskName"
            value={task.taskName}
            onChange={onChangeTask}
          />
          <Select
            compact
            options={options}
            className="select-form-task"
            name="categoryTask"
            placeholder="categoria"
            value={task.categoryTask}
            onChange={onChangeCategory}
          />
          <Button type="submit" color="violet" onClick={onSubmitTask}>
            Añadir tarea
          </Button>
        </Input>
      </Grid>
      {error && (
        <Grid centered>
          <Header as="h4" color="red" className="alert-error-form">
            <Icon name="close" />
            <Header.Content>La tarea es obligatoria</Header.Content>
            <Icon name="close" />
          </Header>
        </Grid>
      )}
    </>
  );
};
