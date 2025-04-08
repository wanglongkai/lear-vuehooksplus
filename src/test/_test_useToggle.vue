<template>
    <h2>测试useToggle</h2>
    <div>{{state}}</div>
    <button @click="toggle">toggle</button>
    <button @click="set('value1')">set value1</button>
    <button @click="set('value2')">set value2</button>
    <button @click="setLeft">set left</button>
    <button @click="setRight">set right</button>
</template>
<script lang="ts" setup>
import { useToggle } from 'vue-hooks-plus';

const [state,{toggle, set, setLeft, setRight}] = useToggle('value1', 'value2');
</script>
<style lang="css" scoped>
</style>