/**
 * @name: todoStorage
 * @author: chuanchuan
 * @date: 2022-03-08 10:43
 * @description：todoStorage
 * @update: 2022-03-08 10:43
 */

const LOACL_KEY = "todomvc";

/**
 * 生成一个任务的唯一编号，时间戳+4位随机数
 */
export function generateId() {
  return Date.now() + Math.random().toString(16).substr(2, 4);
}

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

/**
 * 辅助函数，根据传入的状态筛选当前列表
 * @param todos
 * @param visibility
 * @returns {Error|*}
 */
export function filter(todos, visibility = "all") {
  if(visibility === "all") {
    return todos;
  } else if(visibility === "active") {
    return todos.filter((it) => !it.completed);
  } else if(visibility === "completed") {
    return todos.filter((it) => it.completed);
  }

  return new Error("invalid visibility value");
}