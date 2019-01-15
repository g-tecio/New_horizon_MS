<template>
  <v-app>
      <v-container>
        <nuxt />
      </v-container>
    <c-footer></c-footer>
  </v-app>
</template>

<script>
import footer from '~/components/footer/footer.vue'

  export default {
    data() {
      return {
    
      }
    },
    components:{
      'c-footer': footer
    }
  }
</script>
