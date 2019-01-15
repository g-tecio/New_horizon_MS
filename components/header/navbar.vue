<template>
    <div>
        <v-toolbar
        id="core-toolbar"
        height="50px"
        flat
        prominent
        style="background: #fff;"
        >
            <v-layout>
                <v-flex md1>            
                    <v-toolbar-title class="tertiary--text font-weight-light">
                    LOGO
                    </v-toolbar-title>
                </v-flex>
                <v-flex md11>
                    <v-toolbar-items>
                        <v-layout>
                        <div v-for="item in toolbar_options" :key="item">
                                <v-btn :color="item.color" flat>
                                    <v-icon >{{item.icon}}</v-icon>
                                    &nbsp
                                    {{item.title}}
                                </v-btn>
                            </div>
                        </v-layout>
                        <v-spacer></v-spacer>
                        <v-layout align-center justify-end row fill-height>
                            <v-flex md7>
                                <v-layout>
                                    <v-flex>
                                        <v-btn flat> Sign out</v-btn>
                                    </v-flex>     
                                    <v-flex>
                                        <h4>Cesar Miguel SH</h4>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-toolbar-items>
                </v-flex>
            </v-layout>
        </v-toolbar>
   </div>
</template>

<script>

import {
  mapMutations,
  mapState
} from 'vuex'

export default {
    data(){
        return{
            notifications: [
                'Mike, John responded to your email',
                'You have 5 new tasks',
                'You\'re now a friend with Andrew',
                'Another Notification',
                'Another One'
            ],
            title: 'New Horizon',
            responsive: false,
            responsiveInput: false,
            toolbar_options:[
                {icon:'move_to_inbox',title:'Events', paht:'', color:'green darken-2'},
                {icon:'local_offer',title:'Inventory', paht:'', color:'blue darken-2'},
                {icon:'shopping_cart',title:'Customers', paht:'', color:'orange darken-2'},
                {icon:'group',title:'Bidding', paht:'', color:'purple darken-2'}
            ]
        }
    }  
}
</script>

<style>
</style>
