import { defineComponent, createApp } from 'vue'

const Comp = defineComponent({
  name: 'MyComp',

  setup() {
    const options = {
      dateStyle: 'long',
    }
    return {
      options,
      date: new Date(),
    }
  },

  template: '<div>Сегодня {{ date.toLocaleDateString("en-En", options) }}</div>',
})

const app = createApp(Comp)
const vm = app.mount('#app')

console.info(vm.date)
