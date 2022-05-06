import { Box, Modal, Paper, Space } from '@mantine/core'
import { useState } from 'react'
import { TaskCardActionButtonsProps } from '../../../interfaces'
import TaskAddNew from '../AppTaskNew/TaskAddNew'
import TaskAddNewModal from '../AppTaskNew/TaskAddNewModal'
import TaskClearAccomplished from './TaskClearAccomplished'

export default function TaskCardActionButtons({
  tasks,
  addTask,
  taskFilter,
}: TaskCardActionButtonsProps) {
  
  const [taskNewModalOpen, setTaskNewModalOpen] = useState<boolean>(false)

  return (
    <Box
      component='section'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3rem',
      }}
    >
      <Modal
        size='xl'
        opened={taskNewModalOpen}
        onClose={() => setTaskNewModalOpen(false)}
        //  title="title!"
        overlayOpacity={0.55}
        overlayBlur={3}
        centered
      >
        <TaskAddNewModal
          addTask={addTask}
          setTaskNewModalOpen={setTaskNewModalOpen}
        />
      </Modal>

      <Paper sx={{}} shadow='xs' p='md' withBorder>
        <TaskAddNew setTaskNewModalOpen={setTaskNewModalOpen} />
        <Space h='xs' />
        <TaskClearAccomplished tasks={tasks} taskFilter={taskFilter} />
      </Paper>
    </Box>
  )
}