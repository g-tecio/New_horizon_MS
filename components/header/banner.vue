<template>
    <v-img
        class="banner_img"
        src="https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg"
        max-height="300px"
        max-widht="100%"
        :aspect-ratio="3"
        position="center"
        transition="auto">
        <h2 class="event_label">Events</h2>
    </v-img>
</template>

<script>
export default {

}
</script>

<style>

    .banner_img{
        margin-top: 49px;
        height: 300;
    }
    .event_label{
        border-bottom: 1px solid white;
        color: white;
        margin-left: 10px;
        width: 40%;
        bottom: 10px;
        position: absolute;
        text-decoration: none;
        font-size: 45px;
  }

</style>
