<template>
    <div class="del-usr">
        <DeleteQuesion :message="'input id of user you need delete'" :src="'http://localhost:5000/delete-user/'" />
    </div>
</template>
<script>
import DeleteQuesion from '../components/DeleteQuesion.vue'
export default {
    name: 'DelUsr',
    components: { DeleteQuesion },
    
}
</script>
<style lang="">
    
</style>