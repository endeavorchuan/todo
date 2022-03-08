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