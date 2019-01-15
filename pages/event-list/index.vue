<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout justify-center wrap>
            <v-flex md12>
                <v-card>
                    <v-card-title>
                    <h2>Events</h2>
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        append-icon="search"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                    </v-card-title>
                    <v-data-table
                        v-model="selected"
                        :headers="headers"
                        :items="items"
                        :search="search"
                        :pagination.sync="pagination"
                        item-key="name"
                        class="elevation-1"
                    >
                        <template slot="headerCell" slot-scope="{ header }">
                            <span
                                class="subheading font-weight-light text-success text--darken-3"
                                v-text="header.text"
                            />
                            <th
                                v-for="header in header.headers"
                                :key="header.text"
                                :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                @click="changeSort(header.value)"
                                >
                                <v-icon small>arrow_upward</v-icon>
                                {{ header.text }}
                            </th>
                        </template>
                        <template slot="items" slot-scope="{ item }">
                            <tr :active="item.selected" @click="item.selected = !item.selected">
                                <td>
                                <v-checkbox
                                    :input-value="item.selected"
                                    primary
                                    hide-details
                                ></v-checkbox>
                                </td>
                                <td class="text-xs-left">{{ item.event_name }}</td>
                                <td class="text-xs-left">{{ item.address.city }}</td>
                                <td class="text-xs-left">{{ item.status }}</td>
                                <td class="text-xs-left">{{ item.date.formated_date }}</td>
                                <td class="text-xs-left"><v-btn flat :to="{ name: 'event-list-id' ,params:{ id : item.id }}"><v-icon>visibility</v-icon>  See details</v-btn></td>
                            </tr>
                        </template>
                        <v-alert slot="no-results" :value="true" color="error" icon="warning">
                            Your search for "{{ search }}" found no results.
                        </v-alert>
                    </v-data-table>
                </v-card>
                    <div class="text-xs-center">
                        <v-btn
                            to="/new-event"
                            class="btn-style"
                            color="success"
                        >
                            Create Event
                            <v-icon right dark>add</v-icon>
                        </v-btn>

                        <v-btn
                            class="btn-style"
                            color="error"
                        >
                            Delete Event
                            <v-icon right dark>delete</v-icon>
                        </v-btn>

                    </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    api_url:
      "https://ox8usqk4cd.execute-api.us-east-2.amazonaws.com/hackathon/events",
    selected: [],
    search: '',
    pagination: {
        sortBy: 'name'
    },
    headers: [
        {
            sortable: false,
            text: "Edit",
        },
        {
            sortable: false,
            text: "Event Name",
            value: "event_name"
        },
        {
            sortable: false,
            text: "City",
            value: "address.city"
        },
        {
            sortable: true,
            text: "Status",
            value: "status"
        },
        {
            sortable: true,
            text: "Date",
            value: "date"
        },
        {
            sortable: false,
            text: "See details",
            value: "status"
        }
    ],
    items: [
      {
        event_name: "Event",
        address: {
          city: "dgo"
        },
        date: "none",
        status: "active"
      }
    ]
  }),
  components:{
  },
  methods:{
    changename(){
      this.$store.commit('set_name','mike')
    }
  },
    mounted() {
        axios({ method: "GET", url: this.api_url, headers: { "content-type": "application/json" } }).then(
            result => {
                this.items = result.data
            },
            error => {
                console.error(error);
            }
        );
    },
    toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.items.slice()
    },
    changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
    }
};
</script>
