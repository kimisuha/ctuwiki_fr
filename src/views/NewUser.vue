<template>
    <div class="new user">
        <Form :type="'CreateUser'" :src="'http://localhost:5000/new-user'" />
    </div>
</template>
<script>
import Form from '../components/Form.vue'
export default {
  components: { Form },
    name: 'NewUser',
}
</script>
<style lang="">
    
</style>