<script setup>
defineProps({
  iframeUrl: {
    type: String,
    default: 'enquiry-form/sample.html',
    require: true
  }
})
</script>

<template>
  <div class="columns p-5">
    <div class="column is-2"></div>
    <div class="column is-8 is-size-2 has-text-centered has-text-primary">
      Survey Form
    </div>
    <div class="column is-2"></div>
  </div>
  <div id="enquiry" class="columns">
    <div class="column is-2"></div>
    <div class="column is-8">
      <!-- iframe window -->
      <iframe :src="$props.iframeUrl"
        scrolling="no"
        frameBorder="0"
        style="width: 100%; height: 800px; border: 0px; overflow: hidden; margin: 0; padding: 0" 
        allow="clipboard-read; clipboard-write" />
    </div>
    <div class="column is-2"></div>
  </div>
</template>

<style scoped>
</style>