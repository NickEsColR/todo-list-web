import { Button, Grid, Header, Icon, Label } from "semantic-ui-react";

export const Task = ({ task, deleteTask }) => {
  const { idTask, taskName, categoryTask } = task;
  return (
    <Grid.Column width={7} className="task-container">
      {categoryTask && (
        <Label color="teal" ribbon="right" className="m5">
          {categoryTask}
        </Label>
      )}
      <Header as="h3" className="header-task">
        {taskName}
      </Header>
      <Grid centered columns={2}>
        <Grid.Column>
          <Button color="red" onClick={(e) => deleteTask(idTask)}>
            <Icon name="remove circle" />
            Eliminar
          </Button>
        </Grid.Column>
      </Grid>
    </Grid.Column>
  );
};
