/**
 * @name: useRemoveTodo
 * @author: chuanchuan
 * @date: 2022-03-08 16:25
 * @description：useRemoveTodo
 * @update: 2022-03-08 16:25
 */

export default function useRemoveTodo() {
  const remove = (todo) => {
    todosRef.value.splice(todosRef.value.indexOf(todo), 1);
  };

  const removeCompleted = () => {
    todosRef.value = todosRef.value.filter((it) => !it.completed);
  };

  return {
    remove,
    removeCompleted
  }
};