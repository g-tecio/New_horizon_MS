<template>
  <v-app>
    <drawer :config="config"/>
    <navbar :config="config"></navbar>
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
import drawer from '~/components/header/drawer.vue'
  export default {
    data() {
      return {
        config:{
          drawer:false
        }
      }
    },
    components:{
      navbar,
      banner,
      'c-footer': footer,
      drawer
    }
  } 
</script>
