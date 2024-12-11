import { create } from "zustand";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoStore {
    todos: Todo[];
    addTodo: (todo: string) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],

  addTodo: (todo) => 
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text: todo, completed: false }],
    })),
  removeTodo: (id: number) => {
    set((state) => ({
      todos: state.todos.splice(id, 1),
    }))
  },
  toggleTodo: (id: number) => {
    set((state) => ({
      todos: state.todos.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    }))
  },
}))


export default useTodoStore
