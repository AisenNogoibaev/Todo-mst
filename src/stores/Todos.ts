import { types, Instance } from "mobx-state-tree";

export type TodoType = Instance<typeof Todo>;
export type TodoStoreType = Instance<typeof TodoStore>;

const Todo = types
  .model("Todo", {
    id: types.optional(types.number, () => Date.now()),
    text: types.string,
    isChecked: false,
  })
  .actions((self: any) => ({
    check() {
      self.isChecked = !self.isChecked;
    },
  }));

export const TodoStore = types
  .model("TodoStore", {
    todos: types.array(Todo),
    newTodoText: "",
  })
  .views((self: any) => ({
    get searchedTodos() {
      return self.todos.filter((todo: any) => todo.text.includes(self.newTodoText));
    },
  }))
  .actions((self: any) => ({
    addTodo() {
      if (!self.newTodoText.trim()) {
        return;
      }

      self.todos.push({ text: self.newTodoText });
      self.newTodoText = "";
    },
    setNewTodoText(text: string) {
      self.newTodoText = text;
    },
  }));
