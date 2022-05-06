import { Button } from '@mantine/core'
import { TaskAddNewProps } from '../../../interfaces'

export default function TaskAddNew({ setTaskNewModalOpen }: TaskAddNewProps) {
  return (
    <Button
      onClick={() => setTaskNewModalOpen(true)}
      sx={(theme) => ({
        paddingInline: '4rem',
        [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
          paddingInline: '1rem',
        },
      })}
      color='red'
      variant='outline'
    >
      Start To Add A New Task Here
    </Button>
  )
}