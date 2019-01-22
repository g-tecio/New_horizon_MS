<template>
    <v-navigation-drawer
      v-model="config.drawer"
      :mini-variant="mini"
      absolute
      temporary
      id="drawer_style"
    >

        <v-list class="pa-1">
            <v-list-tile avatar>
                <v-list-tile-content>
                    <v-toolbar-title>{{title}}</v-toolbar-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
            <v-divider></v-divider>
            <v-list-tile
                v-for="item in toolbar_options"
                :key="item.path"
                :to="item.path"
            >
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-divider light></v-divider>
            <v-list-tile
                v-for="item in toolbar_user"
                :key="item.path"
                :to="item.path"
            >
            <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: ['config'],
    data(){
        return{
            title: 'New Horizon',
            responsive: false,
            responsiveInput: false,
            toolbar_options:[
                {icon:'move_to_inbox',title:'Events', path:'/event-list' },
                {icon:'local_offer',title:'Inventory', path:'/event'},
                {icon:'group',title:'Customers', path:'/event-l', },
                {icon:'shopping_cart',title:'Bidding', path:'/evt', }
            ],
            toolbar_user: [
                {icon: 'person', title: 'Username'},
                {icon: 'exit_to_app', title: 'Sign Out', path:'/'}
            ]
        }
    }
}
</script>

<style>
    #drawer_style{
        z-index: 1000000;
        position: fixed;
    }
</style>


