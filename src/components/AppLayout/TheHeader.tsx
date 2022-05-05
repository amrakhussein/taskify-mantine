import { Box, Container, Text } from '@mantine/core'

export default function TheHeader({ count }: any) {
  const displayHeading = (): JSX.Element | null => {
    const showOneTaskCount = <Text component='h3'>One task to finish! </Text>
    const showTaskCount = <Text component='h3'>{count} tasks to finish.. </Text>
    const showTaskMessage = (
      <Text
        component='h3'
        sx={(theme) => ({
          fontSize: '2rem',
          [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            fontSize: '1.25rem',
          },
        })}
      >
        let's make a task!
      </Text>
    )

    return count === 0
      ? showTaskMessage
      : count === 1
      ? showOneTaskCount
      : count > 1
      ? showTaskCount
      : null
  }

  return (
    <Box
      component='header'
      sx={(theme) => ({
        borderBottom: '0.3rem solid',
        borderColor: theme.colors.orange[9],
      })}
    >
      <Container
        size='xl'
        sx={(theme) => ({
          display: 'flex',
          // flexGrow: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '6rem',
          [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            height: '4rem',
          },
        })}
      >
        <Text
          sx={(theme) => ({
            flexGrow: 1,
            fontSize: '3rem',
            [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
              fontSize: '2rem',
            },
          })}
          component='h1'
        >
          Taskify
        </Text>

        <Text sx={{ flexGrow: 1, textAlign: 'right' }}>{displayHeading()}</Text>
      </Container>
    </Box>
  )
}
