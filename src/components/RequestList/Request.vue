<template>
    <div>
        <p>{{listRequest}}</p>
        <p>{{listRequest.item}}</p>
        <p>{{listRequest.content}}</p>
    </div>
</template>
<script>
export default {
    props: {
        listRequest: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>

</style>