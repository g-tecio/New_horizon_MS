<template>
  <v-app>
    <navbar></navbar>
    <banner></banner>
     <v-container>
        <nuxt />
      </v-container>
  </v-app>
</template>

<script>
import navbar from '~/components/header/navbar.vue'
import banner from '~/components/header/banner.vue' 
  
  export default {
    data() {
      return {
      }
    },
    components:{
      navbar,
      banner
    }
  }
</script>
