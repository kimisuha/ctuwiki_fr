<template>
    <div class="new-nghanh">
        <Form :type="'CreateNghanh'" :src="'http://localhost:5000/create-nghanh'" />
    </div>
</template>
<script>
import Form from '../components/Form.vue'
export default {
  components: { Form },
    name: 'NewNghanh',

}
</script>
<style lang="">
    
</style>