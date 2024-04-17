<script setup>
import PoolServiceCard from './PoolServiceCard.vue';
</script>

<template>
  <div class="columns self_height"></div>
  <div id="service" class="columns p-3">
    <div class="column is-1"></div>
    <div class="column is-10 self_p has-text-centered is-size-2 is-capitalized">
      What services that we offer
    </div>
    <div class="column is-1"></div>
  </div>
  <div class="columns p-5">
    <div class="column is-1"></div>
    <div class="column is-6 self_p">
      <div class="columns">
        <div class="column is-5">
          <PoolServiceCard id="0" />
        </div>
        <div class="column is-1"></div>
        <div class="column is-5">
          <PoolServiceCard id="1" />
        </div>
        <div class="column is-1"></div>
      </div>
      <div class="columns">
        <div class="column is-5">
          <PoolServiceCard id="2" />
        </div>
        <div class="column is-1"></div>
        <div class="column is-5">
          <PoolServiceCard id="3" />
        </div>
        <div class="column is-1"></div>
      </div>
    </div>
    <div class="column is-4 p-5">
      <figure class="image is-4by5 self_poly1">
        <img src="@/assets/pool.jpg" />
      </figure>
    </div>
    <div class="column is-1"></div>
  </div>
</template>

<style scoped>
.self_height{
  height: 15vh;
}
.self_p {
  color: white;
}
.self_poly1 {
  clip-path: inset(0 0 0 0 round 5% 5% 5% 5%);
  -webkit-filter: contrast(150%) saturate(110%) opacity(80%);
  filter: contrast(150%) saturate(110%) opacity(80%);
}
</style>