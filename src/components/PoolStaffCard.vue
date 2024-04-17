<script setup>
import { ref } from 'vue'

defineProps({
  id: {
    type: Number,
    required: true
  }
})

const staffs = ref([
  { name: 'CTO Milan', link: 'CTO.Milan', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#contact">#responsive</a>' },
  { name: "CEO Leo", link: "CTO.Leo", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#contact">#responsive</a>' },
  { name: "CFO Ibrahim", link: "CFO.Ibrahim", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#contact">#responsive</a>' }
])
</script>

<template>
  <div class="card self_bgcolor">
    <div class="card-image">
      <figure class="image is-4by3">
        <img v-if="id==0" src="@/assets/avatar/avatar-1.jpg" :alt="staffs[id].name">
        <img v-if="id==1" src="@/assets/avatar/avatar-2.jpg" :alt="staffs[id].name">
        <img v-if="id==2" src="@/assets/avatar/avatar-3.jpg" :alt="staffs[id].name">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left has-text-top">
          <span class="mdi mdi-facebook-messenger is-size-2 has-text-link"></span>
        </div>
        <div class="media-content pt-3">
          <p class="title is-4">{{ staffs[id].name }}</p>
          <p class="subtitle is-6">@{{ staffs[id].link }}</p>
        </div>
      </div>
      <div class="content is-size-5">
        <span v-html="staffs[id].content"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.self_bgcolor {
  background-color: #e0f0e0;
}
</style>