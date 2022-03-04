import React from "react";
import { useStore } from "../../../../contexts/StoreContext";
import { observer } from "mobx-react";
import { TodoItem } from "../TodoItem";
import { TodoType } from "../../../../stores/Todos";


export const TodoList: React.FC<{}> = observer(() => {
  const store = useStore();
  return (
    <>
      {store.todos.searchedTodos.map((todo: TodoType) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
});