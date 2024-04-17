<script setup>
</script>

<template>
  <div class="self_wrap">
    <div class="columns">
      <div class="column is-1"></div>
      <div class="column is-10">
        <div class="columns px-5 pt-5">
          <div class="column is-1">
            <a href="/">
              <img class="image is-64x64" alt="Brand Logo" src="@/assets/pool-logo.svg" />
            </a>
          </div>
          <div class="column is-auto">
            <p class="title self_p1 is-size-5 pt-4 is-uppercase">
              <a class="self_header_link" href="#service"><span class="mdi mdi-book-open-page-variant-outline"> Landing Page</span></a>
              <a class="self_header_link" href="#case"><span class="mdi mdi-email-fast-outline ml-5"> Email Marketing</span></a>
              <a class="self_header_link" href="#contact"><span class="mdi mdi-chart-line ml-5"> Sales Funnels</span></a>
            </p>
          </div>
        </div>
        <div class="block self_height_1"></div>
        <div class="block px-5">
          <div class="block self_p0">
            Neuron Media
            <br>
            Startup Inc.
          </div>
          <div class="block self_p2 is-size-3">
            Renovate, Elevate, Dominate, Grow, Succeed
          </div>
        </div>
        <div class="block self_height_2 px-5 pt-5"></div>
      </div>
      <div class="column is-1"></div>
    </div>
  </div>
</template>

<style scoped>
.self_wrap {
  background-image: url(@/assets/phone-laptop.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.self_height_1 {
  height: 20vh;
}
.self_height_2 {
  height: 20vh;
}
.self_p1, .self_p0 {
  color: white;
}
.self_p0 {
  font-size: 4rem;
}
.self_p2 {
  color: #fcf7fb;
  font-weight: bold;
}

.self_header_link {
  color: white;
}
.self_header_link:hover {
  color: #1ce7fb;
}
</style>
