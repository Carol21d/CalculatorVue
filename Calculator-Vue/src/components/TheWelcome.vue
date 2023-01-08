<script setup>
// const monedaEl_one = document.getElementById('moneda-uno');
// const monedaEl_two = document.getElementById('moneda-dos');
// const cantidadEl_one = document.getElementById('cantidad-uno');
// const cantidadEl_two = document.getElementById('cantidad-dos');
// const cambioEl = document.getElementById('cambio');
// const tazaEl = document.getElementById('taza');

//  function calculate(){
//     const moneda_one = monedaEl_one.value;
//     const moneda_two = monedaEl_two.value;

//    fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
//    .then(res => res.json() )
//    .then(data => {
//        const taza = data.rates[moneda_two];

//        cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

//        cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);

//     } );

// }

// monedaEl_one.addEventListener('change', calculate);
// cantidadEl_one.addEventListener('input', calculate);
// monedaEl_two.addEventListener('change', calculate);
// cantidadEl_two.addEventListener('input', calculate);

// taza.addEventListener('click', () =>{
//     const temp = monedaEl_one.value;
//     monedaEl_one.value = monedaEl_two.value;
//     monedaEl_two.value = temp;
//     calculate();
// })
//     calculate();
</script>

<template>
  <h1>Conversor de moneda</h1>
  <p>Escoje la moneda y la cantidad para realizar la conversion</p>

  <div class="container">
    <div class="moneda">
      <select id="moneda-uno">
        <option value="">usd</option>
        <option value="">eur</option>
        <option value="">yen</option>
        <option value="">hon</option>
      </select>
      <input type="number" id="cantidad-uno" placeholder="0" value="1" />
    </div>

    <div class="taza-cambio-container">
      <button class="btn" id="taza">cambio</button>
      <div class="cambio" id="cambio"></div>
    </div>
    
    <div class="moneda">
        <select id="moneda-dos">
          <option value="">usd</option>
          <option value="">eur</option>
          <option value="">yen</option>
          <option value="">hon</option>
        </select>
        <input type="number" id="cantidad-dos" placeholder="0" />
    </div>
  </div>


</template>

<style lang="css">
:root {
  --primary-color: #f5ce52;
}

* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 20px;
}

h1 {
  color: var(--primary-color);
}

p {
  text-align: center;
}

.btn {
  color: white;
  background: var(--primary-color);
  cursor: pointer;
  border-radius: 5px;
  font-size: 12px;
  padding: 5px 12px;
}

.conversor-imagen {
  width: 150px;
}

.moneda {
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.moneda select {
  padding: 10px 20px 10px 10px;
  border: 1px solid #dedede;
  font-size: 16px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

.moneda input {
  border: 0;
  font-size: 30px;
  text-align: right;
}

.taza-cambio-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cambio {
  color: var(--primary-color);
  font-size: 14px;
  padding: 0 10px;
  font-weight: 600;
}

select:focus,
input:focus,
button:focus {
  outline: 0;
}

@media (max-width: 600px) {
  .moneda input {
    width: 200px;
  }
}
</style>
