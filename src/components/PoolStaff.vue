<script setup>
import PoolStaffCard from './PoolStaffCard.vue'
</script>

<template>
  <div class="columns">
    <div class="column is-1"></div>
    <div class="column is-3 p-5">
      <PoolStaffCard id="0" />
    </div>
    <div class="column is-3 p-5">
      <PoolStaffCard id="1" />
    </div>
    <div class="column is-3 p-5">
      <PoolStaffCard id="2" />
    </div>
    <div class="column is-auto"></div>
  </div>
</template>

<style scoped>
</style>