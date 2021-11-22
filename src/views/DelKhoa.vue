<template>
  <div class="del-kh">
    <DeleteQuesion
      :message="'input id of khoa you need delete'"
      :src="'http://localhost:5000/delete-khoa/'"
    />
  </div>
</template>
<script>
import DeleteQuesion from "../components/DeleteQuesion.vue";
export default {
  name: "DelKh",
  components: { DeleteQuesion },
};
</script>
<style lang="">
</style>