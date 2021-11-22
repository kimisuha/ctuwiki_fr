<template>
    <div class="create-attention">
        <Form :type="'CreateAtten'" :src="'http://localhost:5000/create-attention'" />
    </div>
</template>
<script>
import Form from '../components/Form.vue'
export default {
  name: 'NewAttention',
  components: { Form },
    
}
</script>
<style lang="">
    
</style>