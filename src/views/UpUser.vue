<template>
    <div class="update-user">
        <Form :type="'UpdateUser'" :url="'http://localhost:5000/user/ '" :src="'http://localhost:5000/update-user/'" />
    </div>
</template>
<script>
import Form from '../components/Form.vue'
export default {
  components: { Form },
    name: 'UpdateUser',

}
</script>
<style lang="">
    
</style>