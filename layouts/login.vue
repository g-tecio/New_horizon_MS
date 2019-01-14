<template>
  <v-app>
    <navbarout></navbarout>
    <banner></banner>
     <v-container>
        <nuxt />
      </v-container>
  </v-app>
</template>

<script>
import navbarout from '~/components/header/navbarout.vue'
import banner from '~/components/header/banner.vue' 
  export default {
    data() {
      return {
    
      }
    },
    components:{
      navbarout,
      banner
    }
  }
</script>
