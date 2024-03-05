// we wont get any jsx in return so making the file as JS
import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});


// exporting TodoContext as provider
export const TodoProvider = TodoContext.Provider;

// exporting TodoContext as a function 
export const useTodo = () => {
  return useContext(TodoContext);
};
