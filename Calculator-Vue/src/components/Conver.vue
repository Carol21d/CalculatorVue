<template>
    <h1>Conversor</h1>
      <div>
        <div>
          <div>
            <div>
              <div>
                <label for="amount">Enter amount</label>
                <input
                  type="number"
                  id="amount"
                  placeholder="Enter amount.."
                  v-model="amount"
                  v-on:keyup="onChange"
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <label for="origin">Origin</label>
                <select
                  id="origin"
                  v-model="origin"
                  v-on:change="onChange()"
                >
                  <option v-for="(currency, index) in currencys" v-bind:key="index">
                    {{ currency }}
                  </option>
                </select>
              </div>
            </div>
            <div>
              <div>
                <label for="exchange">Exchange</label>
                <select
                  id="exchange"
                  v-model="exchange"
                  v-on:change="onChange()"
                >
                  <option v-for="(currency, index) in currencys" v-bind:key="index">
                    {{ currency }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <h3 v-if="amount > 0">
              <span>{{ amount }} {{ origin }}</span>
              <span> = </span>
              <span>{{ getTotal(total) }} {{ exchange }}</span>
            </h3>
          </div>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          currencys: ["USD", "EUR", "LEM", "YEN"],
          amount: 0,
          origin: "USD",
          exchange: "EUR",
          total: 0,
        };
      },
      methods: {
        onChange() {
          switch (this.origin) {
  
            case "USD":
              if (this.exchange === "USD") {
                this.total = this.amount;
              }
              if (this.exchange === "EUR") {
                this.total = this.amount * 0.92;
              }
              if (this.exchange === "LEM") {
                this.total = this.amount * 24.67;
              }
              if (this.exchange === "YEN") {
                this.total = this.amount * 129.56;
              }
              break;
           
            case "EUR":
              if (this.exchange === "USD") {
                this.total = this.amount * 1.09;
              }
              if (this.exchange === "EUR") {
                this.total = this.amount;
              }
              if (this.exchange === "LEM") {
                this.total = this.amount * 26.83;
              }
              if (this.exchange === "YEN") {
                this.total = this.amount * 140.92;
              }
              break;
             
            case "LEM":
              if (this.exchange === "USD") {
                this.total = this.amount * 0.041;
              }
              if (this.exchange === "EUR") {
                this.total = this.amount * 0.037;
              }
              if (this.exchange === "LEM") {
                this.total = this.amount;
              }
              if (this.exchange === "YEN") {
                this.total = this.amount * 5.25;
              }
              break;
            
              case "YEN":
              if (this.exchange === "USD") {
                this.total = this.amount * 0.0077;
              }
              if (this.exchange === "EUR") {
                this.total = this.amount * 0.0071;
              }
              if (this.exchange === "LEM") {
                this.total = this.amount * 0.19;
              }
              if (this.exchange === "YEN") {
                this.total = this.amount;
              }
              break;
            default:
          }
        },
        getTotal(valor) {
            return Math.round(valor)
        }
      },
    };
    </script>
    
    <style scoped>
    .badge {
      margin: 2px;
      font-size: 150%;
    }
    label {
      font-weight: 700;
      font-size: 130%;
    }
    </style>