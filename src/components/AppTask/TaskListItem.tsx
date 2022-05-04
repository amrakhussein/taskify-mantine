import {
  Badge,
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Menu,
  Modal,
  Paper,
  Text,
} from '@mantine/core'
import { parseISO } from 'date-fns'
import format from 'date-fns/format'
import { useState } from 'react'
import { Check, Trash } from 'tabler-icons-react'
import TaskListItemModal from './TaskListItemModal'

export default function TaskListItem({
  task,
  taskMarkComplete,
  taskUndoComplete,
  taskHandleDelete,
}: any) {
  const [taskModalOpen, setTaskModalOpen] = useState(false)

  const taskFormatDate = (taskDate: Date) => {
    let date = new Date(taskDate).toISOString()
    return format(parseISO(date), "yyyy-MM-dd' | 'HH:mm")
  }

  const taskContentTruncate = (text: string) =>
    text.length > 10 ? text.substring(0, 200) + '...' : text
  const taskTitleTruncate = (text: string) =>
    text.length > 10 ? text.substring(0, 35) + '...' : text

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
          <Modal
            size='xl'
            opened={taskModalOpen}
            onClose={() => setTaskModalOpen(false)}
            //  title="title!"
            overlayOpacity={0.55}
            overlayBlur={3}
            centered
          >
            <TaskListItemModal
              taskTitle={task.title}
              taskContent={task.content}
              taskDate={taskFormatDate(task.date)}
              setTaskModalOpen={setTaskModalOpen}
            />
          </Modal>

          <Grid>
            <Grid.Col span={11}>
              <Text
                sx={(theme) => ({
                  fontWeight: 'bold',
                  color: theme.colors.gray[9],
                })}
              >
                {taskTitleTruncate(task.title)}
              </Text>
            </Grid.Col>
            <Grid.Col span={1}>
              <Menu
                // trigger='hover'
                delay={250}
                sx={{
                  transform: 'rotate(90deg)',
                }}
              >
                <Divider />

                {!task.completed ? (
                  <Menu.Item
                    sx={{
                      opacity: `${task.completed ? '0.4' : '1'}`,
                    }}
                    icon={<Check size={16} strokeWidth={5} />}
                    onClick={() => taskMarkComplete(task.id)}
                  >
                    Mark Complete
                  </Menu.Item>
                ) : (
                  <Menu.Item
                    sx={{
                      opacity: `${!task.completed ? '0.4' : '1'}`,
                    }}
                    onClick={() => taskUndoComplete(task.id)}
                  >
                    Undo Mark Complete
                  </Menu.Item>
                )}
                <Divider />

                <Menu.Item
                  color='red'
                  icon={<Trash size={16} />}
                  onClick={() => taskHandleDelete(task.id)}
                >
                  Delete Task
                </Menu.Item>
              </Menu>
            </Grid.Col>
          </Grid>

          <Divider my='sm' />

          <Text
            sx={(theme) => ({
              color: theme.colors.gray[8],
            })}
          >
            {taskContentTruncate(task.content)}
          </Text>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Box
              sx={{
                display: `${task.completed ? '' : 'none'}`,
              }}
            >
              <Badge
                sx={{
                  position: 'relative',
                }}
                variant='outline'
                color='orange'
              >
                <Box sx={{ display: 'inline', paddingRight: '1.2rem' }}>
                  Task Accomplished
                </Box>

                <Box
                  sx={{
                    display: 'inline',
                    position: 'absolute',
                    top: '50%',
                    right: '5%',
                    transform: 'translateY(-40%)',
                  }}
                >
                  <Check size={16} strokeWidth={4} />
                </Box>
              </Badge>
            </Box>
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
                alignSelf: 'self-end',
                color: theme.colors.gray[7],
              })}
            >
              {taskFormatDate(task.date)}
            </Box>
            <Box>
              {' '}
              <Button
                sx={(theme) => ({
                  float: 'right',
                  color: theme.colors.orange[9],
                  borderColor: theme.colors.orange[9],
                })}
                variant='outline'
                onClick={() => setTaskModalOpen(!taskModalOpen)}
              >
                EXPAND
              </Button>
            </Box>
          </Box>
        </Paper>
      </Group>
    </Box>
  )
}
