<template>
  <v-footer class="main-footer">
    <strong> &copy; {{ new Date().getFullYear() }} {{name}}.</strong>
  </v-footer>
</template>

<script>
export default {
    data(){
        return{
            name: 'Cartwheel Galaxy Inc'
        }
    }
}
</script>

<style>

    .main-footer{
        padding: 15px;
        border-top: 1px solid #d2d6de;
        color: #444;
    }
    
</style>