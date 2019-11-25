<template>
    <!-- component display the map for each states using object from the leaflet map -->
    <div class="state-detail p-2">
        <h4>The State of {{ state.name }} </h4>

        <p v-if="state.visited"> You have visited this state</p>
        <p v-else> You have not visited this state</p>
        <!--Set leaflet properties by adding l-map component and bind with v-bind to Vue data-->
        <div id="map-container">
            <l-map
            ref="stateMap"
            style="height:100%; width:100%;"
            v-bind:zoom="zoom"
            v-bind:center="center">
            <l-tile-layer :url="url"></l-tile-layer>
            </l-map>
        </div>

    </div>

</template>

<script>
import {LMap, LTileLayer } from 'vue2-leaflet'

export default {
    name: 'StateDetail',
    components: {
        LMap, LTileLayer
    },
    data: function(){
        return {
            state:{
                name: ''
            },
            url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            zoom:2,
            center: [44, -103], //initialize at the geographic center of the US
            bounds:null
        }
    },
    mounted(){
        this.state.name = this.$route.params.state
        //This prevent user dragging map away from state. It's optional
        //User can still zoom in and out
        this.$refs.stateMap.mapObject.dragging.disable()
        this.fetchStateData()
    },
    methods: {
        fetchStateData(){
            this.$stateService.getOne(this.state.name).then( data => {
                this.state = data
                this.zoom = data.zoom
                this.center = [data.lat, data.lon]
                //fly to new center coordinates to center on state
                this.$refs.stateMap.mapObject.flyTo(this.center, this.zoom)
            })
        }
    }

}
</script>

<style scoped>
/*---Set Map height--*/
#map-container{
    height:30em;
}
</style>