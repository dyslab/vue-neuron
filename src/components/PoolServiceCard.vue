<script setup>
import { ref } from 'vue'

defineProps({
  id: {
    type: Number,
    required: true
  }
})

const services = ref([
  { name: 'Landing Page', icon: 'mdi-book-open-page-variant-outline has-text-primary', content: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet' },
  { name: "Email Marketing", icon: "mdi-email-fast-outline has-text-warning", content: 'Phasellus nec iaculis mauris. Phasellus nec iaculis mauris. Phasellus nec iaculis mauris' },
  { name: "Sales Funnels", icon: "mdi-chart-line has-text-info", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris' },
  { name: "Business Booster", icon: "mdi-slot-machine has-text-danger", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris' },
])
</script>

<template>
  <div class="content has-text-centered">
    <div class="is-flex is-justify-content-center">
      <div class="is-flex is-justify-content-center is-align-items-center self_icon">
        <span :class="`mdi is-size-2 ${services[id].icon}`"></span>
      </div>
    </div>
    <p class="is-size-4">{{ services[id].name }}</p>
    <div class="has-text-left is-size-5">{{ services[id].content }}</div>
  </div>
</template>

<style scoped>
.self_icon {
  width: 80px;
  height: 80px;
  background-color: #021c25;
  clip-path: circle(50% at 50% 50%);
  margin-bottom: 20px;
}
</style>