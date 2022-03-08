/**
 * @name: todoStorage
 * @author: chuanchuan
 * @date: 2022-03-08 10:43
 * @description：todoStorage
 * @update: 2022-03-08 10:43
 */

const LOACL_KEY = "todomvc";

/**
 * 获取目前所有的任务
 */
export function fetch() {
  const result = localStorage.getItem(LOACL_KEY);
  if(result) {
    return JSON.parse(result);
  }
  return [];
}

/**
 * 保存所有任务
 * @param todos   任务列表
 */
export function save(todos) {
  localStorage.setItem(LOACL_KEY, JSON.stringify(todos))
}