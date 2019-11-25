<template>
<!-- State component hold each icon and name with a check box for each states -->
    <div class="state-summary p-2 rounded">

        <span class="m-2">{{ state.name }}</span>
        <p>
            <input id="visited" class="m-2" type="checkbox" 
            v-model="stateVisited" 
            v-on:change ="$emit('isVisited', stateName, stateVisited)">
        </p>

        <p>
            <router-link v-bind:to="{ name: 'detail', params:{state: stateName } }">
                <img class="map-icon" src="@/assets/icons8-map.png">
            </router-link>
        </p>
    </div>

</template>

<script>
export default {
    name: 'State',
    props:{
        state:Object
    },
    data: function(){
        return {
            stateName: this.state.name,
            stateVisited: this.state.visited,
        }
    }
}
</script>

<style scoped>
.state-summary{
    height: 8em;
    width:10em;
    border: 1px #eee solid;
    background-color: whitesmoke
}
.map-icon{
    width:2em;
    height:2em;
}
</style>