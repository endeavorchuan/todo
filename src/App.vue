<template>
  <h1>count: {{ countRef }}</h1>
  <p>
    <button @click="decrease">decrease</button>
    <button @click="increase">increase</button>
  </p>
</template>

<script>
import {ref} from "vue";

function useCount() {
  let countRef = ref(0);   // 此处的数据具有响应式，官方建议使用ref创建时，变量名后添加后缀
  console.log(countRef);   // ref函数将数字封装到对象里，所以count不是数字，而是一个对象

  const increase = () => {
    countRef.value ++;
  };

  const decrease = () => {
    countRef.value --;
  };

  return {
    countRef,
    increase,
    decrease
  };
}

export default {
  // 这个函数会自动执行，在所有生命周期钩子函数之前调用
  setup() {
    // console.log("在所有生命周期钩子函数之前调用")
    // console.log(this);    // 此处的this为undefined

    // let count = 0;
    // const increase = () => {
    //   count ++;    // 此处增加，并未引起重新渲染，即数据不具有响应式
    // };

    // count本身是一个对象，但直接访问count也可以读取count.value的值，是因为count访问的是组件代理对象，
    // 组件代理对象访问组件实例中的count.value

    // 返回的对象中的所有属性，都会到组件实例中去
    return {
      ...useCount()
    }
  }
}
</script>
