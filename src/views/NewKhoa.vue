<template>
    <div class="new-khoa">
        <Form :type="'CreateKhoa'" :src="'http://localhost:5000/create-khoa'" />
    </div>
</template>
<script>
import Form from '../components/Form.vue'
export default {
  components: { Form },
    name: 'NewKhoa',

}
</script>
<style lang="">
    
</style>