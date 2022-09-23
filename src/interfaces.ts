import { Dispatch, SetStateAction } from 'react'

export interface TaskNewModalOpenState {
  taskNewModalOpen: boolean
}

export interface Task {
  id: string
  title: string
  content: string
  completed: boolean
  date: Date
}

export interface TaskClearAccomplishedProps {
  tasks: Task[]
  taskFilter: any
}

export interface TaskAddNewModalProps {
  addTask: AddTaskFunc
  setTaskNewModalOpen: Dispatch<SetStateAction<boolean>>
}

export interface TaskAddNewProps {
  setTaskNewModalOpen: Dispatch<SetStateAction<boolean>>
}

export interface TaskCardActionButtonsProps {
  tasks: Task[]
  addTask: AddTaskFunc
  taskFilter: () => void
}

export interface TaskListItemProps {
  task: Task
  taskMarkComplete: (value: string) => void
  taskUndoComplete: (value: string) => void
  taskHandleDelete: (id: string) => void
}
export interface TaskListItemModalProps {
  taskTitle: string
  taskContent: string
  taskDate: string
  setTaskModalOpen: Dispatch<SetStateAction<boolean>>
}

export interface AddTaskFunc {
  (title: string, body: string): void
}

export interface FormValues {
  title: string
  content: string
}
