import { Box } from '@mantine/core'
import { useId, useState } from 'react'
import { AddTaskFunc, Task } from '../../interfaces'
import Layout from '../AppLayout/TheLayout'
import taskData from '../todoData'
import { TaskListItem } from './AppTaskItem'
import TaskCardActionButtons from './micros/TaskCardActionButtons'

export default function App() {
  // TODO
  // useLocalStorage hook
  // validate edge cases like if app were to be deployed in a server context

  const localStorageIfany = JSON.parse(
    localStorage.getItem('taskData') as string
  )
  // check if any valid local storage for data persistent
  // initialized with taskData (json) instead [made for initial render/example]
  const initialized: Task[] = localStorageIfany ? localStorageIfany : taskData

  const [todos, setTodos] = useState<Task[]>(initialized)
  console.log('todos: ', todos)
  const { length: NumberOfTodos } = todos

  const taskMarkComplete = (taskID: any) => {
    let updatedTodos = todos.map((item: Task) =>
      item.id === taskID && item.completed === false
        ? { ...item, completed: !item.completed }
        : { ...item }
    )
    localStorage.setItem('taskData', JSON.stringify(updatedTodos))
    updatedTodos = JSON.parse(localStorage.getItem('taskData') as string)
    setTodos(updatedTodos)
  }
  const taskUndoComplete = (taskID: string) => {
    let updatedTodos = todos.map((item: Task) =>
      item.id === taskID && item.completed
        ? { ...item, completed: !item.completed }
        : { ...item }
    )
    localStorage.setItem('taskData', JSON.stringify(updatedTodos))
    updatedTodos = JSON.parse(localStorage.getItem('taskData') as string)
    setTodos(updatedTodos)
  }

  const addTask: AddTaskFunc = (title: string, body: string): void => {
    let taskData = [...todos]
    console.log('taskData: ', taskData)

    const taskID = String(useId) // handles types error
    const taskDate = new Date()

    console.log('taskID: ', typeof taskID)
    let newTask = {
      id: taskID,
      title: title,
      content: body,
      completed: false,
      date: taskDate,
    }
    let updatedTaskData = [...taskData, newTask]
    //
    localStorage.setItem('taskData', JSON.stringify(updatedTaskData))
    updatedTaskData = JSON.parse(localStorage.getItem('taskData') as string)
    //
    setTodos(updatedTaskData)
  }

  const taskHandleDelete = (id: string) => {
    let updatedTodos = todos.filter((item: Task) => item.id !== id)
    localStorage.setItem('taskData', JSON.stringify(updatedTodos))
    updatedTodos = JSON.parse(localStorage.getItem('taskData') as string)
    setTodos(updatedTodos)
  }

  const taskHandleFilter = () => {
    let filteredCompleted = () => todos.filter((item: Task) => !item.completed)
    localStorage.setItem('taskData', JSON.stringify(filteredCompleted()))
    let updatedFilteredCompleted = JSON.parse(
      localStorage.getItem('taskData') as string
    )
    setTodos(updatedFilteredCompleted)
  }

  const todoItems = todos?.map((item: Task, idx: number) => (
    <TaskListItem
      key={idx}
      task={item}
      taskHandleDelete={taskHandleDelete}
      taskMarkComplete={taskMarkComplete}
      taskUndoComplete={taskUndoComplete}
    />
  ))

  return (
    <>
      <Layout count={NumberOfTodos}>
        <>
          <TaskCardActionButtons
            addTask={addTask}
            tasks={todos}
            taskFilter={taskHandleFilter}
          />
          <Box component='main'>{todoItems}</Box>
        </>
      </Layout>
    </>
  )
}
