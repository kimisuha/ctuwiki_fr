<template>
  <div class="update-nghanh">
    <Form :type="'UpdateNghanh'" :url="'http://localhost:5000/nghanh/'" :src="'http://localhost:5000/update-nghanh/'" />
  </div>
</template>
<script>
import Form from "../components/Form.vue";
export default {
  components: { Form },
  name: "UpdateKhoa",
};
</script>
<style lang="">
</style>