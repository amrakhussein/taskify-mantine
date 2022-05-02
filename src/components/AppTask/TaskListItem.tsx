import { Box, Divider, Group, Paper, Text } from '@mantine/core'

export default function TaskListItem({
  task,
  handleChange,
  handleDelete,
  handleToggle,
}: any) {
  console.log('task: ', task)
  return (
    <>
      <Box
        sx={
          {
            // display: 'flex',
            // flexDirection: 'row',
            // justifyContent: 'center',
            // alignItems: 'center',
            // flexGrow: 1,
          }
        }
      >
        <Group position='left' grow spacing='sm'>
          <Paper
            my='sm'
            sx={(theme) => ({
              backgroundColor: theme.colors.gray[2],
              maxWidth: '30rem',
              height: '12rem',
            })}
            shadow='xs'
            radius='md'
            p='md'
          >
            <Text>{task.title}</Text>
            {/* <Space h="md" /> */}

            <Divider my='sm' />

            <Text>{task.content}</Text>
          </Paper>
        </Group>
      </Box>
    </>
  )
}
