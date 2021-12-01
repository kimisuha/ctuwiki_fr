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
  methods: {
    getData(){
      axios
      .get("http://localhost:5000/admin")
      .then((response) => (this.info = response.data))
    }
  },
  mounted() {
    this.info = setInterval(this.getData, 500);
  },
};
</script>
<style lang="">
</style>