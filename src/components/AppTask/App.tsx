import { useState } from 'react'
import taskData from '../todoData'
import { TaskListItem } from './AppTaskItem'

import { Box } from '@mantine/core'

import { AddTaskFunc, Task } from '../../interfaces'
import Layout from '../AppLayout/TheLayout'
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

  // track current Task ID for edit existing data
  const [taskID, setTaskID] = useState(null)

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
  const taskUndoComplete = (taskID: any) => {
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
    // TODO
    // use lib for handling unique IDs
    let { id: lastId } = taskData[taskData.length - 1]
    let newId = lastId + 1
    let newTask = {
      id: newId,
      title: title,
      content: body,
      completed: false,
      date: new Date(),
    }
    let updatedTaskData = [...taskData, newTask]
    //
    localStorage.setItem('taskData', JSON.stringify(updatedTaskData))
    updatedTaskData = JSON.parse(localStorage.getItem('taskData') as string)
    //
    setTodos(updatedTaskData)
  }

  const taskHandleDelete = (id: number) => {
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
