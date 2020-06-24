<template>
    <v-content>
        <div v-if="listItems.length > 0">
        <div  v-for="(item, i) in listItems" v-bind:key="i">
            <p>{{item.ingredient}} to make {{item.title}}</p>
        </div>
    </div>
    </v-content>
</template>
<script>
export default {
    data(){
        return{
            listItems: []
        }
    },
    mounted(){
        this.$http.post(this.apiUrl + '/shopping/list', {
               user_id:"5ece027fd3d03807df3a0fb8"
            }).then(response =>{
                this.listItems = response.data
                console.log(response)
            }).catch(()=>{
                console.log('error retrieving resources')
            });
    },
    computed:{
        apiUrl: function(){
            return this.$store.state.apiUrl
        }
    }
}
</script>
<style scoped>

</style>