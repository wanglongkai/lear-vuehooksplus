<template>
  <div>
    <div>
      <button style="margin-left: 8px" @click="() => add(String(Date.now()))">
        Add Timestamp
      </button>
      <button
        style="margin-left: 8px"
        @click="() => remove('hi vue-hooks-plus')"
        :disabled="!has('hi vue-hooks-plus')"
      >
        Remove text
      </button>
      <button style="margin-left: 8px" @click="() => reset()">Reset</button>
    </div>
    <div>
      <pre>{{ JSON.stringify(Array.from(set), null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // import { useSet } from 'vue-hooks-plus'
  import useSet from '../hooks/useSet'

  const [set, { add, remove, reset, has }] = useSet(['hi vue-hooks-plus'])
</script>
