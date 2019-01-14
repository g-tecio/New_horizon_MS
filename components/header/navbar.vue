<template>
    <v-toolbar
      id="core-toolbar"

      flat
      prominent
      style="background: #eee;"
    >
        <v-toolbar-title
          class="tertiary--text font-weight-light"
        >
          <slot></slot>
          {{title}}
        </v-toolbar-title>

      <v-spacer />
      <v-toolbar-items>
        <v-flex
          align-center
          layout
          py-2
        >
          <v-text-field
            v-if="true"
            class="mr-4 mt-2 purple-input"
            label="Search..."
            hide-details
            color="purple"
          />
          <v-menu
            bottom
            left
            content-class="dropdown-menu"
            offset-y
            transition="slide-y-transition">
            <router-link
              v-ripple
              slot="activator"
              class="toolbar-items"
              :to="this.$route.params"
            >
              <v-badge
                color="error"
                overlap
              >
                <template slot="badge">
                  {{ notifications.length }}
                </template>
                <v-icon color="tertiary">notifications</v-icon>
              </v-badge>
            </router-link>
            <v-card>
              <v-list dense>
                <v-list-tile
                  v-for="notification in notifications"
                  :key="notification"
                  @click="onClick"
                >
                  <v-list-tile-title
                    v-text="notification"
                  />
                </v-list-tile>
              </v-list>
            </v-card>
          </v-menu>
          <router-link
            v-ripple
            class="toolbar-items"
            :to="this.$route.params"
          >
            <v-icon color="tertiary">person</v-icon>
          </router-link>
        </v-flex>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>

import {
  mapMutations,
  mapState
} from 'vuex'

export default {
  data: () => ({
    notifications: [
      'Mike, John responded to your email',
      'You have 5 new tasks',
      'You\'re now a friend with Andrew',
      'Another Notification',
      'Another One'
    ],
    title: 'New Horizon',
    responsive: false,
    responsiveInput: false
  }),
}
</script>

<style>
  #core-toolbar a {
    text-decoration: none;
  }

  .event_label{
    border-bottom: 1px solid white;
    color: white;
    margin-left: 10px;
    width: 40%;
    bottom: 10px;
    position: absolute;
    text-decoration: none;
    font-size: 45px;
  }
</style>
