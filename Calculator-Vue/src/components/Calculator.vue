<script>
export default {
  data() {
    return {
      result: "",
      buttons: [
        { id: "multiplication", label: " *" },
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
        class="button"
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
@use "@/scss/mixins.scss" as m;
@use "@/scss/colors.scss" as c;

.wrapper {
  margin: 10px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 14px;
  width: auto;
  height: auto;

  background-color: map-get(c.$colors, "astro navy");
  @include m.mv(700px) {
    background-color: map-get($map: c.$colors, $key: "dark-blue");
  }

  .wrapper-title {
    @include m.flex(flex, auto, auto, center, center);
    font-family: monospace;
    font-size: 3em;
    font-weight: 700;
    color: #febe10;
  }

  .wrapper-display {
    margin: 1.5rem 1.5rem;
    height: 80px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    background-color: #e1ebee;
    .wrapper-display__result {
      font-size: 55px;
      font-weight: 200;
      text-align: right;
      margin-right: 1.5rem;
    }
  }

  .wrapper-buttons {
    @include m.flex(grid, auto, auto, center, center);
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    margin: 1.5rem 1.5rem;

    button {
      color: white;
      padding: 1em;
      border-radius: 1rem;
      margin-top: 0.5em;
      &:hover {
        background-color: map-get($map: c.$colors, $key: "purple");
      }
    }
  }
}
.button:nth-child(1) {
  background-color: map-get($map: c.$colors, $key: "dark cyan");
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: span 1;
  grid-column-end: 2;
}

.button:nth-child(2) {
  background-color: map-get($map: c.$colors, $key: "dark cyan");
}

.button:nth-child(3) {
  background-color: map-get($map: c.$colors, $key: "dark cyan");
}

.button:nth-child(4) {
  background-color: map-get($map: c.$colors, $key: "dark cyan");
}

.button:nth-child(5) {
  background-color: map-get($map: c.$colors, $key: "dark cyan");
}

.button:nth-child(6) {
  background-color: map-get($map: c.$colors, $key: "mcdonalds-yellow");
  grid-row-start: 5;
  grid-column-start: 1;
  grid-row-end: span 1;
  grid-column-end: 6;
}

.button:nth-child(7) {
  background-color: map-get($map: c.$colors, $key: "lava");
}

.button:nth-child(12) {
  background-color: map-get($map: c.$colors, $key: "carolina-blue");
  grid-row-start: 2;
  grid-column-start: 5;
  grid-row-end: span 1;
  grid-column-end: 4;
}

.button:nth-child(13) {
  background-color: map-get($map: c.$colors, $key: "carolina-blue");
  grid-row-start: 2;
  grid-column-start: 1;
  grid-row-end: span 1;
  grid-column-end: 2;
}

.button:nth-child(14) {
  background-color: map-get($map: c.$colors, $key: "carolina-blue");
  grid-row-start: 2;
  grid-column-start: 2;
  grid-row-end: span 1;
  grid-column-end: 2;
}

.button:nth-child(15) {
  background-color: map-get($map: c.$colors, $key: "carolina-blue");
  grid-row-start: 2;
  grid-column-start: 3;
  grid-row-end: span 1;
  grid-column-end: 3;
}

.button:nth-child(16) {
  background-color: map-get($map: c.$colors, $key: "carolina-blue");
  grid-row-start: 3;
  grid-column-start: 1;
  grid-row-end: span 1;
  grid-column-end: 1;
}

.button:nth-child(17) {
  background-color: map-get($map: c.$colors, $key: "carolina-blue");
  grid-row-start: 3;
  grid-column-start: 2;
  grid-row-end: span 1;
  grid-column-end: 2;
}

.button:nth-child(18) {
  background-color: map-get($map: c.$colors, $key: "carolina-blue");
  grid-row-start: 3;
  grid-column-start: 4;
  grid-row-end: span 1;
  grid-column-end: 3;
}

.button:nth-child(19) {
  background-color: map-get($map: c.$colors, $key: "carolina-blue");
  grid-row-start: 4;
  grid-column-start: 1;
  grid-row-end: span 1;
  grid-column-end: 2;
}

.button:nth-child(20) {
  background-color: map-get($map: c.$colors, $key: "carolina-blue");
  grid-row-start: 4;
  grid-column-start: 2;
  grid-row-end: span 1;
  grid-column-end: 2;
}

.button:nth-child(21) {
  background-color: map-get($map: c.$colors, $key: "carolina-blue");
  grid-row-start: 4;
  grid-column-start: 3;
  grid-row-end: span 1;
  grid-column-end: 4;
}
</style>
