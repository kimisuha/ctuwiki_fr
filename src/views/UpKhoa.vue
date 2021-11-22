<template>
    <div class="update-khoa">
        <Form :type="'UpdateKhoa'" :src="'http://localhost:5000/update-khoa/'" :url="'http://localhost:5000/khoa/'" />
    </div>
</template>
<script>
import Form from '../components/Form.vue'
export default {
  components: { Form },
    name: 'UpdateKhoa',

}
</script>
<style lang="">
    
</style>