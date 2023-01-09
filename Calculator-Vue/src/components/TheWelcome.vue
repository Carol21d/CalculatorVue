
<script setup>
function calculate() {
    let valor = document.getElementById("valor").value;
    let resultado;
    let dolar = 1.06
    let yenchino = 140.51
    let lempira = 26.26

    if (valor=="usd") {
        resultado = valor * dolar
        alert("El cambio a Dolares es: $" + resultado);
    }
    else if (valor=="yen") {
        resultado = valor * yenchino
        alert("El cambio a Yenes es : Y" + resultado);

    }
    else if (valor=="hon") {
        resultado = valor * lempira
        alert("El cambio a Lempiras es : H" + resultado);
    }
    else {
        alert("Seleccione una divisa e introduzca un valor para obtener el cambio")

    }
}


</script>


<template>

    <h1>Conversor de moneda</h1>
    <p>Escoje la moneda y la cantidad para realizar la conversion</p>

    
        <div class="moneda">
            <select v-model="selected">
                <option value="usd">usd</option>
                <option value="yen">yen</option>
                <option value="hon">hon</option>
            </select>
            
 
<span> {{ selected }}</span>


            <input type="number" placeholder="0" v-model="valor">

        </div>

            <button class="btn" v-on:click="calculate" >
                cambio
            </button>


</template>

<style>
:root {
    --primary-color: #dbb63a;
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
    color: rgb(12, 1, 1);
    background: var(--primary-color);
    cursor: pointer;
    border-radius: 5px;
    font-size: 12px;
    padding: 5px 12px;
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

.tasa-cambio-container {
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

@media (max-width:600px) {
    .moneda input {
        width: 200px;
    }

}
</style>