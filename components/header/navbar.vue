<template>
    <v-toolbar>
        <v-toolbar-title>New Horizon</v-toolbar-title>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
            v-for="item in toolbar_options"
            :key="item.icon"
            :to="item.link"
            flat
            ><v-icon>{{item.icon}}</v-icon> {{ item.title }}</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
            v-for="item in toolbar_user"
            :key="item.icon"
            flat
            ><v-icon>{{item.icon}}</v-icon> {{ item.title }}</v-btn>
        </v-toolbar-items>
        <v-toolbar-items class="hidden-md-and-up">
            <v-btn
            v-for="item in toolbar_user"
            :key="item.icon"
            flat
            ><v-icon>{{item.icon}}</v-icon> {{ item.title }}</v-btn>
        </v-toolbar-items>
        <v-menu class="hidden-md-and-up">
            <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
                <v-list>
                <v-list-tile v-for="item in toolbar_options" :key="item.icon">
                    <v-list-tile-content>
                    <v-list-tile-title><v-icon>{{item.icon}}</v-icon> {{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>     
                </v-list>
        </v-menu>
    </v-toolbar>
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
            ],
            toolbar_user: [
                {icon: 'exit_to_app', title: 'Sign Out'},
                {icon: 'person', title: 'Username'}
            ]
        }
    }  
}
</script>

<style>
</style>
