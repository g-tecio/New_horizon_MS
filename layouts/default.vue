<template>
  <v-app>
    <navbar></navbar>
    <banner></banner>
     <v-container>
        <nuxt />
      </v-container>
    <c-footer></c-footer>
  </v-app>
</template>

<script>
import navbar from '~/components/header/navbar.vue'
import banner from '~/components/header/banner.vue' 
import footer from '~/components/footer/footer.vue'
  
  export default {
    data() {
      return {
      }
    },
    components:{
      navbar,
      banner,
      'c-footer': footer
    }
  } 
</script>
