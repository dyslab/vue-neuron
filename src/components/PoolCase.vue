<script setup>
const info1 = [
  { title: 'Landing page', text: 'This is where we create a compelling page for our clients and this is purely for getting more leads for our clients.' },
  { title: 'Email marketing', text: 'This is the use of persuasive writing and conduct this into our emails to then turn our clients leads into customers.' },
  { title: 'Sales funnels', text: 'This is where we conduct some research on your business and then build a funnel which will turn people who are just interested into customers and give an overall plan of how to do that.' },
]
const info2 = [
  { title: 'Digital marketing', text: 'Digital marketing can help build brand reputation by attracting targeted traffic. The types of audiences for your content are most likely already prepared to know more about your brand, products or services and may be interested enough to purchase what you have to offer. ' },
  { title: 'Better customer experience', text: 'Digital transformation can help companies understand customer preferences and needs through data analytics and AI-driven insights. This can help companies anticipate needs and deliver tailored offerings, which can lead to increased customer loyalty and repeat business.' },
  { title: 'Maximize Revenue', text: 'At Neuron Media, we specialise in empowering businesses to thrive in the digital online world through our services. With expertise in building sales funnels, crafting compelling email marketing campaigns, and designing impactful landing pages, we are committed to helping our clients achieve their growth objectives and maximize their online presence to gain more sales.' },
]
</script>

<template>
  <div class="columns self_height"></div>
  <div id="case" class="columns p-3">
    <div class="column is-1"></div>
    <div class="column is-10 self_p has-text-centered is-size-2 is-capitalized">
      An overview of our services
    </div>
    <div class="column is-1"></div>
  </div>
  <div class="columns p-5">
    <div class="column is-1"></div>
    <div class="column is-10 self_p">
      <div class="columns">
        <div class="column is-6">
          <figure class="image is-1by1 self_poly1">
            <img src="@/assets/case/dewalt.jpg">
          </figure>
        </div>
        <div class="column is-auto has-text-left is-size-3">
          <div class="block" v-for="(item, index) in info1" :key="index">
            <p class="has-text-warning">{{ item.title }}</p>
            <div class="block is-size-5 self_p1">
              <span>{{ item.text }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="columns self_height1"></div>
      <div class="columns">
        <div class="column is-6 has-text-left is-size-3">
          <div class="block" v-for="(item, index) in info2" :key="index">
            <p class="has-text-warning">{{ item.title }}</p>
            <div class="block is-size-5 self_p1">
              <span>{{ item.text }}</span>
            </div>
          </div>
        </div>
        <div class="column is-auto">
          <figure class="image is-1by1 self_poly2">
            <img src="@/assets/case/homedepot.jpg">
          </figure>
        </div>
      </div>
    </div>
    <div class="column is-1"></div>
  </div>
  <div class="columns p-5">
    <div class="column is-1"></div>
    <div class="column is-10">
      <div class="block">
        <span class="mdi mdi-gift self_p0"></span>
        <span class="is-size-1 ml-5 self_p is-capitalized">Surprisingly gifts</span>
        <p class="is-size-4 self_p1">While other businesses are using digital marketing to increase their sales, We are offering a surprise for you, includes 3 sets of black boxes and more options worths over £400 to your dream home.</p>
      </div>
    </div>
    <div class="column is-1"></div>
  </div>
</template>

<style scoped>
.self_height{
  height: 15vh;
}
.self_height1{
  height: 10vh;
}
.self_p {
  color: white;
}
.self_p0 {
  color: #f01b3c;
  font-size: 4rem;
}
.self_p1 {
  color: #e0e0e0;
}
.self_poly1 {
  clip-path: polygon(0 6%, 96% 0, 100% 95%, 5% 100%);
}
.self_poly2 {
  clip-path: polygon(0 0, 100% 4%, 90% 100%, 8% 96%);
}
</style>