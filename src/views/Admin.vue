<template>
  <div class="admin">
    <div>
      <h2>user</h2>
      <Table :info="info.user" :type="'user'" />
    </div>

    <div>
      <h2>khoa</h2>
      <Table :info="info.khoa" :type="'khoa'" />
    </div>

    <div>
      <h2>nghanh</h2>
      <Table :info="info.nghanh" :type="'nghanh'" />
    </div>

    <div>
      <h2>thong bao</h2>
      <Table :info="info.atten" :type="'atten'" />
    </div>
  </div>
</template>
<script>
import Table from "../components/Table.vue";
import axios from "axios";
export default {
  name: "Admin",
  components: { Table },
  data() {
    return {
      info: Object,
    };
  },
  mounted() {
    axios
      .get("http://localhost:5000/admin")
      .then((response) => (this.info = response.data));
  },
};
</script>
<style lang="">
</style>