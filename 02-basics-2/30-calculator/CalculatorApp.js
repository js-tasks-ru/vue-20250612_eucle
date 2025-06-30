import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const operand1 = ref(0)
    const operand2 = ref(0)
    const operator = ref('sum')

    const result = computed(() => {
      const x = operand1.value
      const y = operand2.value

      switch (operator.value) {
        case 'sum':
          return x + y
        case 'subtract':
          return x - y
        case 'multiply':
          return x * y
        case 'divide':
          return y === 0 ? 'Делить на ноль нельзя' : x / y
        default:
          return 0
      }
    })

    return {
      operand1,
      operand2,
      operator,
      result,
    }
  },

  template: `
    <div class="calculator">
      <input 
        type="number"
        v-model="operand1"
        aria-label="First operand" />

      <div class="calculator__operators">
        <label><input type="radio" v-model="operator" name="operator" value="sum"/>➕</label>
        <label><input type="radio" v-model="operator" name="operator" value="subtract"/>➖</label>
        <label><input type="radio" v-model="operator" name="operator" value="multiply"/>✖</label>
        <label><input type="radio" v-model="operator" name="operator" value="divide"/>➗</label>
      </div>

      <input
        type="number"
        v-model="operand2"
        aria-label="Second operand" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
