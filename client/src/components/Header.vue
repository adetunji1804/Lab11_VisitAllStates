<template>
<!-- Header component representing the Header page... it is static page, displayed at the head of each page/component-->
<div class="header">
    <div class="jumbotron">
        <h4 class="display-4" id ="title"> Have you visited every state?</h4>
    </div>
</div>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style scoped>
.jumbotron{
    background-image:url('../assets/map_header.jpg');
    background-position:center;
    background-size: cover;
}
#title{
    font-weight:200;
    color: antiquewhite;
    text-shadow: 2px 2px 4px #000000;
}
</style>