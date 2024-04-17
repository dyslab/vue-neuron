<script setup>
import { ref, watch } from 'vue'

const email = ref('')
const email_righticon = ref('')
const email_notice = ref('')

// both below expressions did work
const email_validate_pattern = /\b[\w\.-]+@[\w\.-]+\.\w{2,}\b/
//const email_validate_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
watch(email, (newemail) => {
  if (newemail === '') {
    email_righticon.value = ''
    email_notice.value = ''
  } else {
    if (email_validate_pattern.test(newemail)) {
      email_righticon.value = 'mdi-check has-text-success'
      email_notice.value = ''
    } else {
      email_righticon.value = 'mdi-alert has-text-danger'
      email_notice.value = 'Email address is invalid'
    }
  }
})
</script>

<template>
  <div class="columns self_height"></div>
  <div id="contact" class="columns self_p p-5">
    <div class="column is-1"></div>
    <div class="column is-6">
      <div class="block is-size-3 is-capitalized">
        Sign up your email today
      </div>
      <div class="columns">
        <div class="column is-10">
          <div class="block">
            <div class="control has-icons-left has-icons-right">
              <input name="email" class="input is-medium" type="email" v-model="email" placeholder="Your Email Address">
              <span class="icon is-left mdi mdi-36px mdi-email"></span>
              <span :class="`icon is-right mdi mdi-36px ${email_righticon}`"></span>
            </div>
            <p class="help is-danger">{{ email_notice }}</p>
          </div>
        </div>
      </div>
      <div class="field">
        <button class="button is-link is-medium">Sign Up</button>
      </div>
    </div>
    <div class="column is-4 self_p">
      <div class="block is-size-3 is-capitalized">
        Or contact us directly
      </div>
      <div class="block is-size-4 self_p1">
        <div>
          Our Detailed Address
        </div>
        <div>
          <a href="mailto:example@neuron-media.com">example@neuron-media.com</a>
        </div>
        <div>
          Mobile Hotline : 066 5092 9386
        </div>
        <div>
          <span class="mdi mdi-facebook has-text-info">&nbsp;<a href="#">@facebook</a></span>
          <span class="mx-2"></span>
          <span class="mdi mdi-twitter has-text-warning">&nbsp;@twitter</span>
        </div>
      </div>
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
.self_p1 {
  color: #e0e0e0;
}
</style>