import { Button } from '@mantine/core'
import { Task, TaskClearAccomplishedProps } from '../../../interfaces'

export default function TaskClearAccomplished({
  tasks,
  taskFilter,
}: TaskClearAccomplishedProps) {
  return (
    <Button
      onClick={taskFilter}
      disabled={tasks.some((task: Task) => task.completed) ? false : true}
      sx={(theme) => ({
        paddingInline: '4rem',
        [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
          paddingInline: '1rem',
        },
      })}
      color='orange'
      variant='outline'
    >
      Clear Accomplished
    </Button>
  )
}