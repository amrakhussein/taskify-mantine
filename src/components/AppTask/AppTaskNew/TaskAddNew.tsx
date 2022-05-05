import { Box, Button, Modal } from '@mantine/core'
import { useState } from 'react'
import TaskAddNewModal from './TaskAddNewModal'

export default function TaskAddNew({ addTask }: any) {
  const [taskNewModalOpen, setTaskNewModalOpen] = useState(false)

  return (
    <Box sx={{ padding: '1rem' }}>
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
      
      <Button
        onClick={() => setTaskNewModalOpen(true)}
        sx={(theme) => ({
          marginLeft: '10rem',
          [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            marginLeft: '1rem',
          },
        })}
        color='red'
        variant='outline'
      >
        Add A New Task
      </Button>
    </Box>
  )
}
