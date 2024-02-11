import { Grid, Header, HeaderSubheader, Icon } from "semantic-ui-react";
import { Task } from "./Task";

export const TaskContent = ({ tasks, deleteTask }) => {
  return (
    <Grid className="tasks-content">
      <Header as="h2" textAlign="center" icon>
        <Icon name="settings" />
        Administra tus tareas
        {tasks.length === 0 ? (
          <HeaderSubheader className="empty-tasks">
            No hay tareas
          </HeaderSubheader>
        ) : null}
      </Header>
      <Grid.Row>
        {tasks.map((task) => (
          <Task key={task.idTask} task={task} deleteTask={deleteTask} />
        ))}
      </Grid.Row>
    </Grid>
  );
};
