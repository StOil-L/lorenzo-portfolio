export interface TaskProps {
  task: string,
  subtasks?: TaskProps[],
}

function Task(props: TaskProps) {
  return props.subtasks ? (
    <>
      {props.task}
      <ul>
        {props.subtasks.map((subtask, index: number) => {
          return <li key={index}><Task task={subtask.task} subtasks={subtask.subtasks}/></li>
        })}
      </ul>
    </>
  ) : props.task
}

export default Task