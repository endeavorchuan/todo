/**
 * @name: useEditTodo
 * @author: chuanchuan
 * @date: 2022-03-08 14:51
 * @description：useEditTodo
 * @update: 2022-03-08 14:51
 */

import {ref, computed} from "vue";

export default function useEditTodo(todosRef) {
  const editingTodoRef = ref(null);   // 当前正在修改的是哪一个todo
  let originTitle = null;   // 缓存之前的title值

  // 正在修改todo
  const editTodo = (todo) => {
    originTitle = todo.title;
    editingTodoRef.value = todo;
  };

  // 完成修改
  const doneEdit = (todo) => {
    editingTodoRef.value = null;
    const title = todo.title.trim();
    if(title) {
      todo.title = title;
    } else {
      // 删除
      todosRef.value.splice(todosRef.value.indexOf(todo), 1);
    }
  };

  // 取消修改
  const cancelEdit = (todo) => {
    editingTodoRef.value = null;
    todo.title = originTitle;
  };

  // 全部完成或全部未完成
  const allDoneRef = computed({
    get() {
      return todosRef.value.filter(it => !it.completed).length === 0;
    },
    set(checked) {
      todosRef.value.forEach((todo) => {
        todo.completed = checked;
      });
    }
  });

  return {
    editingTodoRef,
    editTodo,
    doneEdit,
    cancelEdit,
    allDoneRef
  }
}