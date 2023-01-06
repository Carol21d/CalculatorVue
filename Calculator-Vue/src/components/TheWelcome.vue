<script>
export default {
  data() {
    return {
      result: '',
      buttons: [
        { id: 'multiplication', label: '*' },
        { id: 'division', label: '/' },
        { id: 'addition', label: '+' },
        { id: 'subtraction', label: '-' },
        { id: 'coma', label: '.' },
        { id: 'equals', label: '=' },
        { id: 'cleanScreen', label: 'C' },
        { id: 'zero', label: '0' },
        { id: 'one', label: '1' },
        { id: 'two', label: '2' },
        { id: 'three', label: '3' },
        { id: 'four', label: '4' },
        { id: 'five', label: '5' },
        { id: 'six', label: '6' },
        { id: 'seven', label: '7' },
        { id: 'eight', label: '8' },
        { id: 'nine', label: '9' }
      ]
    }
  },

  methods: {
    operationChoose(button) {
      switch (button.id) {
        case 'cleanScreen':
          this.result = '';
          break;
        case 'equals':
          this.result = eval(this.result);
          break;
        case 'multiplication':
          this.result += ' ' + button.label + ' ';
          break;
        case 'divide':
          this.result += ' ' + button.label + ' ';
          break;
        case 'addition':
          this.result += ' ' + button.label + ' ';
          break;
        case 'subtract':
          this.result += ' ' + button.label + ' ';
          break;
        default:
          this.result += button.label;
      }
    }
  },
}
</script>
<template>
  <div class="wrapper">
    <h1 class="wrapper-title">Calculator</h1>
    <div class="wrapper-display">
      <input type="text" v-model="result" placeholder="0" readonly />
    </div>
    <div class="wrapper-buttons">
      <button v-for="button in buttons" :key="button.id" @click="operationChoose(button)">{{ button.label }}</button>
    </div>
  </div>
</template>
                         
    
    
                













