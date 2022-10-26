import { Box, Button, Text, Textarea, TextInput } from '@mantine/core'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormValues, TaskAddNewModalProps } from '../../../interfaces'

export default function TaskAddNewModal({
  addTask,
  setTaskNewModalOpen,
}: TaskAddNewModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange', // required for isValid. track input state for submit button
    defaultValues: {
      title: '',
      content: '',
    },
  })
  const onSubmit: SubmitHandler<FormValues> = ({ title, content }) => {
    addTask(title, content)
    reset()
    setTaskNewModalOpen(false)
  }

  return (
    <Box
      component='section'
      sx={(theme) => ({
        color: theme.colors.gray[8],
      })}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text component='h2'>Add your task title</Text>
        <TextInput
          required
          aria-label='task title'
          autoFocus
          {...register('title', { required: true })}
          sx={{}}
        />
        {errors.title && (
          <Text
            sx={{
              color: 'red',
              paddingTop: '0.2rem',
            }}
          >
            This is required*
          </Text>
        )}

        <Text sx={{ paddingTop: '2rem' }} component='h2'>
          Elaborate
        </Text>

        <Textarea
          required
          autosize
          minRows={5}
          aria-label='task content'
          {...register('content', { required: true })}
        />
        {errors.content && (
          <Text
            sx={{
              color: 'red',
              paddingTop: '0.2rem',
            }}
          >
            This is required*
          </Text>
        )}
        <Button
          // disabled={!isValid}
          color='orange'
          sx={{
            marginTop: '2rem',
            float: 'right',
            opacity: `${!isValid ? '0.3' : '1'}`,
          }}
          type='submit'
        >
          Add Task
        </Button>
      </form>
    </Box>
  )
}