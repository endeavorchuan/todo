/**
 * @name: useTodoList
 * @author: chuanchuan
 * @date: 2022-03-08 11:04
 * @description：useTodoList
 * @update: 2022-03-08 11:04
 */

import {ref, watchEffect} from "vue";
import * as todoStorage from "../util/todoStorage";

export default function useTodoList() {

  const todosRef = ref(todoStorage.fetch());
  window.todosRef = todosRef;
  // 在这个函数中，只要是用到了响应式数据，那么这些响应式数据会自动作为依赖
  // 即这个函数依赖这个响应式数据，当响应式数据发生变化，会重新运行这个函数
  watchEffect(() => {
    todoStorage.save(todosRef.value);
  });

  return {
    todosRef
  };
}