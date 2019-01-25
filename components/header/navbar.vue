<template>
    <v-toolbar class="style_toolbar">
        <v-toolbar-title>New Horizon</v-toolbar-title>
        <v-toolbar-items class="hidden-sm-and-down" id="items_left">
            <v-btn
            v-for="item in toolbar_options"
            :key="item"
            :to="item.path"
            flat
            ><v-icon>{{item.icon}}</v-icon> {{ item.title }}</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
            v-for="item in toolbar_user"
            :key="item.icon"
            :to="item.path"
            flat
            ><v-icon>{{item.icon}}</v-icon> {{ item.title }}</v-btn>
        </v-toolbar-items>
        <v-menu class="hidden-md-and-up">
            <v-toolbar-side-icon slot="activator" @click="config.drawer = true"></v-toolbar-side-icon>
        </v-menu>
    </v-toolbar>
</template>

<script>

import {
  mapMutations,
  mapState
} from 'vuex'

export default {
    props: ['config'],
    data(){
        return{
            title: 'New Horizon',
            responsive: false,
            responsiveInput: false,
            toolbar_options:[
                {icon:'move_to_inbox',title:'Events', path:'/event-list' },
                {icon:'local_offer',title:'Inventory'},
                {icon:'group',title:'Customers'},
                {icon:'shopping_cart',title:'Bidding'}
            ],
            toolbar_user: [
                {icon: 'person', title: 'Username'},
                {icon: 'exit_to_app', title: 'Sign Out', path:'/'}
            ]
        }
    },  

}
</script>

<style>
    .style_toolbar{
        position: fixed;
        z-index: 1;
    }

    #items_left{
        padding-left: 20px;
    }
</style>
