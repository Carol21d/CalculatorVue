<script>
export default {
  data() {
    return {
      result: "",
      buttons: [
        { id: "multiplication", label: "*" },
        { id: "division", label: "/" },
        { id: "addition", label: "+" },
        { id: "subtraction", label: "-" },
        { id: "coma", label: "." },
        { id: "equals", label: "=" },
        { id: "cleanScreen", label: "C" },
        { id: "USD", label: "USD" },
        { id: "¥", label: "¥" },
        { id: "HNL", label: "HNL" },
        { id: "EUR", label: "EUR" },
        { id: "zero", label: "0" },
        { id: "one", label: "1" },
        { id: "two", label: "2" },
        { id: "three", label: "3" },
        { id: "four", label: "4" },
        { id: "five", label: "5" },
        { id: "six", label: "6" },
        { id: "seven", label: "7" },
        { id: "eight", label: "8" },
        { id: "nine", label: "9" },
      ],
      exchange: {
        USD: 1.06,
        YEN: 140.51,
        HNL: 26.26,
        EUR: 0.96,
      },
    };
  },

  methods: {
    convert(from, to) {
      this.result = (
        (this.result * this.exchange[to]) /
        this.exchange[from]
      ).toFixed(2);
    },
    operationChoose(button) {
      switch (button.id) {
        case "cleanScreen":
          this.result = "";
          break;
        case "equals":
          this.result = eval(this.result);
          break;
        case "multiplication":
          this.result += " " + button.label + " ";
          break;
        case "divide":
          this.result += " " + button.label + " ";
          break;
        case "addition":
          this.result += " " + button.label + " ";
          break;
        case "subtract":
          this.result += " " + button.label + " ";
          break;
        case "USD":
          this.convert("USD", "YEN");
          break;
        case "¥":
          this.convert("USD", "YEN");
          break;
        case "HNL":
          this.convert("HNL", "EUR");
          break;
        case "EUR":
          this.convert("EUR", "HNL");
          break;
        default:
          this.result += button.label;
      }
    },
  },
};
</script>
<template>
  <div class="wrapper">
    <h1 class="wrapper-title">Calculator</h1>
    <div class="wrapper-display">
      <input
        class="wrapper-display__result"
        type="text"
        v-model="result"
        placeholder="0"
        readonly
      />
    </div>
    <div class="wrapper-buttons">
      <button
        v-for="button in buttons"
        :key="button.id"
        @click="operationChoose(button)"
      >
        {{ button.label }}
      </button>
    </div>
  </div>
</template>
<style lang="scss" scope>
.wrapper {
  margin: 10px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 14px;
  width: auto;
  height: auto;
  background-color: #0a2351;

  .wrapper-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: monospace;
    font-size: 25px;
    font-weight: 800;
    color: #febe10;
  }

  .wrapper-display {
    border-radius: 12em;
    margin-top: 10px;
    height: 80px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    background-color: #e1ebee;
    .wrapper-display__result {
      font-size: 55px;
      font-weight: 200;
      text-align: right;
      margin-right: 14px;
    }
    .wrapper-buttons {
      button {
        
        color: white;
        padding: 10px;
        border-radius: 5px;
        &:hover {
          background-color: #5072A7;
        }
        &[id="button1"] {
          background-color: white;
        }
        &[id="button2"] {
          background-color: white;
        }
      }
      button[label="C"] {
        background-color: #C40233;
      }
      button[label="equals"] {
        background-color: #FFC72C;
        color: white;
      }
    }
  }
}
</style>
