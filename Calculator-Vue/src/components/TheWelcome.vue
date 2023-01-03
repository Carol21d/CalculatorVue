
<script setup>
</script>
<template>
    <div class="calculator">
<form action="#" name="calculator" id="calculator">
  <input type="text" id="screen" value="0" :on-click="capture()">
  <div class="calculator_elements-group1">
    <input type="button" name="seven" id="7" value="7">
    <input type="button" name="eight" id="8" value="8">
    <input type="button" name="nine" id="9" value="9">
  </div>
  <div class="calculator_elements-group2">
    <input type="button" name="four" id="4" value="4">
    <input type="button" name="five" id="5" value="5">
    <input type="button" name="six" id="6" value="6">
  </div>
  <div class="calculator_elements-group3">
    <input type="button" name="one" id="1" value="1">
    <input type="button" name="two" id="2" value="2">
    <input type="button" name="three" id="3" value="3">
  </div>
<div class="calculator_operations">
  <input type="button" name="addition" id="addition" value="+" @click="addition()">
  <input type="button" name="substraction" id="substraction" value="-" @click="substraction()">
  <input type="button" name="multiplication" id="multiplication" value="x" @click="multiplication()">
  <input type="button" name="division" id="division" value="/" @click="division()">
  <input type="button" name="equal" id="equal" value="=" @click="equal()">
</div>
</form>
  </div>
</template>