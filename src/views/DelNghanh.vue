<template>
    <div class="del-ngh">
        <DeleteQuesion  :message="'input id of nghanh you need delete'" :src="'http://localhost:5000/delete-nghanh/'" />
    </div>
</template>
<script>
import DeleteQuesion from '../components/DeleteQuesion.vue'
export default {
    name: 'DelNgh',
    components: { DeleteQuesion }
}
</script>
<style lang="">
    
</style>