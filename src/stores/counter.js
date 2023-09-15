import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      counter: 0,
    }
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  // Like getters, actions get access to the whole store instance through `this` with 
  // full typing (and autocompletion ✨) support. Unlike getters, `actions` can be 
  // asynchronous, you can `await` inside of actions any API call or even other 
  // actions! Here is an example using Mande. Note the library you use doesn't 
  // matter as long as you get a Promise, you could even use the 
  // native fetch function (browser only):
  actions: {
    increment() {
      this.counter++;
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },
    setCounter(val){
      this.counter = val;
    }
  },
});
