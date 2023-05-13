import { RootState } from '@/store'
import { TodoType } from '@/types/todo'
import { createSlice } from '@reduxjs/toolkit'

export interface TodoState {
    items: TodoType[]
}

const initialState: TodoState = {
    items: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload)
        },
    },
})

export const { addTodo } = todoSlice.actions

export const selectTodos = (state: RootState) => state.todo.todos
