/**
 * @name: useFilter
 * @author: chuanchuan
 * @date: 2022-03-08 13:37
 * @description：useFilter
 * @update: 2022-03-08 13:37
 */

import {ref, onMounted, onUnmounted, computed} from "vue";
import {filter} from "../util/todoStorage.js"

const validHash = ["all", "active", "completed"];     // 有效的hash值

export default function useFilter(todosRef) {
  const visibilityRef = ref("all");       // 当前的筛选方式

  // hash值变化的处理函数
  const onHashChange = () => {
    const hash = location.hash.replace(/#\/?/, "");   // 去掉#与/
    if(validHash.includes(hash)) {
      // 有效的hash值
      visibilityRef.value = hash;
    } else {
      location.hash = "";
      visibilityRef.value = "all";
    }
  };

  // 1. 组件挂载完成的生命周期函数
  onMounted(() => {
    window.addEventListener("hashchange", onHashChange);
  });

  // 2. 组件销毁过后的生命周期函数
  onUnmounted(() => {
    window.removeEventListener("hashchange", onHashChange);
  });

  // 经过筛选之后的任务
  const filteredTodosRef = computed(() => {
    return filter(todosRef.value, visibilityRef.value);
  });

  // 还有几项没有完成的事件
  const remainingRef = computed(() => {
    return filter(todosRef.value, "active").length;
  });

  // 目前完成的数量有多少
  const completedRef = computed(() => {
    return filter(todosRef.value, "completed").length;
  });

  return {
    visibilityRef,
    filteredTodosRef,
    remainingRef,
    completedRef
  }
}