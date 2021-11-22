<template>
  <div
    class="
      card
      qscard
      d-flex
      justify-content-center
      text-black
      p-3
      text-capitalize
    "
  >
    <label for="input">{{ message }}</label>
    <input
      type="text"
      placeholder="input code you need delete"
      name="input"
      class="mb-3 form-label"
    />
    <h1>are you sure!?</h1>
    <button class="btn btn-success" @click="Access">yes</button>
    <button class="btn btn-warning" @click="NotAccess">no</button>
    <!-- {{message}} {{src}} -->
  </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";
export default {
  name: "DeleteQuesion",
  props: { message: String, src: String },
  data() {
    return {
      response: {},
    };
  },
  methods: {
    async Access() {
      let value = $("input").val();
      alert(this.src + value);
      await axios
        .post(this.src + value)
        .then((response) => (this.response = response.data))
        .then(this.$router.push({ name: "Admin" }));
    },
    NotAccess() {
      this.$router.push({ name: "Admin" });
    },
  },
};
</script>
<style lang="css">
input {
  width: 75%;
  height: 3rem;
  margin: auto;
}
</style>