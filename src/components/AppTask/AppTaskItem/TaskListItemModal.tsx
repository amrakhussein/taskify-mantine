import { Box, Button, Divider, Group, Paper, Text } from '@mantine/core'
import { TaskListItemModalProps } from '../../../interfaces'

export default function TaskListItemModal({
  taskTitle,
  taskContent,
  taskDate,
  setTaskModalOpen,
}: TaskListItemModalProps) {
  // 
  return (
    <Box sx={{}}>
      <Group position='center' grow spacing='sm'>
        <Paper
          my='sm'
          sx={(theme) => ({
            backgroundColor: theme.colors.gray[2],
            maxWidth: '30rem',
            overflow: 'hidden',
          })}
          shadow='xs'
          radius='md'
          p='md'
          withBorder
        >
          <Text
            sx={(theme) => ({
              fontWeight: 'bold',
              color: theme.colors.gray[9],
            })}
            component='h2'
          >
            {taskTitle}
          </Text>

          {/* <Space h="md" /> */}

          <Divider my='sm' />

          <Text
            sx={(theme) => ({
              color: theme.colors.gray[8],
            })}
            component='p'
          >
            {taskContent}
          </Text>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Box sx={{}}></Box>
          </Box>

          <Divider my='xl' />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={(theme) => ({
                alignSelf: 'center',
                paddingTop: '0.4rem',
                color: theme.colors.gray[7],
              })}
            >
              {taskDate}
            </Box>
            <Box>
              <Button
                color='orange'
                onClick={() => setTaskModalOpen(false)}
                variant='subtle'
              >
                Close
              </Button>
            </Box>
          </Box>
        </Paper>
      </Group>
    </Box>
  )
}