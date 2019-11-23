<template>
    
    <div class="summary">

        <h5>You have visited {{ total }} {{ statesPlural }} </h5>

        <p id="visited-all" v-if="visitedAll">
            You have visited all 50 states and the District of Columbia!
        </p>
    </div>

</template>

<script>
export default {
    name :'Summary',
    props: {
        total: Number,
        visitedAll: Boolean
    },
    computed: {
        statesPlural(){
            //check if number of state visited is more than 1
            return this.total === 1 ? 'state' : 'states'
        }
    }
}
</script>

<style scoped>
#visited-all{
    color:#be8234;
}
</style>