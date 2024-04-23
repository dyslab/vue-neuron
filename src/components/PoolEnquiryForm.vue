<script setup>
</script>

<template>
  <div class="columns self_height"></div>
  <div class="columns p-5">
    <div class="column is-3"></div>
    <div class="column is-6 is-size-2 has-text-centered self_p">
      Survey Form
    </div>
    <div class="column is-3"></div>
  </div>
  <div id="enquiry" class="columns p-5">
    <div class="column is-3"></div>
    <div class="column is-6">
      <!-- Form Content -->
      <form action="/" name="enquiry-form" method="POST" data-netlify="true">
        <div class="field">
          <label class="label self_p1 is-medium">Name</label>
          <div class="control">
            <input class="input is-medium" type="text" name="name" placeholder="Your real name">
          </div>
        </div>
        <div class="field">
          <label class="label self_p1 is-medium">Nickname</label>
          <div class="control">
            <input class="input is-medium" type="text" name="nickname" placeholder="Your nickname">
          </div>
        </div>
        <div class="field">
          <label class="label self_p1 is-medium">Contact Email / Telephone Number / Social Media Link</label>
          <div class="control">
            <input class="input is-medium" type="text" name="contact" placeholder="Help us to keep contact with you">
          </div>
        </div>
        <div class="field">
          <label class="label is-medium self_p1">Hobby</label>
          <div class="control">
            <div class="select is-medium">
              <select name="hobby[]">
                <option>Mobile Phone Games</option>
                <option>Computer Games</option>
                <option>Webpage Games</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label self_p1 is-medium">Message</label>
          <div class="control">
            <textarea class="textarea is-medium" name="message" placeholder="Your message and request"></textarea>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="checkbox self_p1 is-medium">
              <input type="checkbox" name="send-data-ok" checked>
              I agree to send above data
            </label>
          </div>
        </div>
        <div class="field has-text-centered">
          <div class="control">
            <input type="submit" class="button is-medium is-link" />
          </div>
        </div>
      </form>
    </div>
    <div class="column is-3"></div>
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