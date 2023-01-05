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
        { id: '0', label: '0' },
        { id: '1', label: '1' },
        { id: '2', label: '2' },
        { id: '3', label: '3' },
        { id: '4', label: '4' },
        { id: '5', label: '5' },
        { id: '6', label: '6' },
        { id: '7', label: '7' },
        { id: '8', label: '8' },
        { id: '9', label: '9' }
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
    <div class="wrapper-display">
      <input type="text" v-model="result" placeholder="0" readonly />
    </div>
    <div class="wrapper-buttons">
      <button v-for="button in buttons" :key="button.id" @click="operationChoose(button)">{{ button.label }}</button>
    </div>
  </div>
</template>
                         
    
    
                













