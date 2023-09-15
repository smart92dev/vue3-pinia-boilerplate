<script>
// import { watch } from 'vue';
import { useCounterStore } from '../stores/counter';
export default {
  name: 'AboutView',
  setup() {
    const counterStore = useCounterStore();
    return { counterStore }
  },
  data() {
    return {
      value: 0,
    }
  },
  computed: {
    doubleCount() {
      return this.counterStore.doubleCount;
    },
    counter() {
      this.value = this.counterStore.counter
      return this.counterStore.counter;
    }
  },
  methods: {
    increment() {
      this.counterStore.increment()
    },
    randomize() {
      this.counterStore.randomizeCounter()
    },
    changeValue() {
      this.counterStore.setCounter(this.value)
    }
  },
}
</script>

<template>
  <div class="lg:min-h-screen lg:flex lg:items-center">
    <div class="lg:pl-4 text-center">
      <h4 class="pb-4">Counter: {{ counter }}</h4>
      <h4 class="pb-4">Double Count: {{ doubleCount }}</h4>
      <input type="number" v-model="value" @input="changeValue" class="border mb-4 p-2 rounded-md">
      <br>
      <button class="bg-[blue] mx-4 hover:bg-[lightblue] text-white px-4 py-2 rounded-md"
        @click="increment">Increment</button>
      <button class="bg-[blue] hover:bg-[lightblue] text-white px-4 py-2 rounded-md" @click="randomize">randomize</button>
    </div>
  </div>
</template>
