<template>
    <v-content>
        <RequestFetchByLocation />
        <RequestFetchByCoordinates />
        <p>Request page</p>
    </v-content>
</template>
<script>
import RequestFetchByLocation from "@/components/RequestList/RequestFetchByLocation.vue";
import RequestFetchByCoordinates from "@/components/RequestList/RequestFetchByCoordinates.vue";
export default {
    components: {
        RequestFetchByLocation,
        RequestFetchByCoordinates
    },
    data(){
        return{
            requests: []
        }
    }
}
</script>
<style scoped>

</style>