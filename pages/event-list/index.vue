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
                        :items="events_details"
                        :pagination.sync="pagination"
                        :search="search"
                        select-all
                        item-key="event_name"
                        class="elevation-1"
                    >
                        <template slot="headers" slot-scope="props">
                        <tr>
                            <th>
                                <v-checkbox
                                    :input-value="props.all"
                                    :indeterminate="props.indeterminate"
                                    primary
                                    hide-details
                                    @click.stop="toggleAll"
                                ></v-checkbox>
                            </th>
                            <th
                                v-for="header in props.headers"
                                :key="header.text"
                            >
                                {{ header.text }}
                            </th>
                        </tr>
                        </template>
                        <template slot="items" slot-scope="props">
                        <tr :active="props.selected">
                            <td>
                            <v-checkbox
                                :input-value="props.selected"
                                primary
                                hide-details
                            ></v-checkbox>
                            </td>
                            <td class="text-xs-center">{{ props.item.event_name }}</td>
                            <td class="text-xs-center">{{ props.item.address.city }}</td>
                            <td class="text-xs-center">{{ props.item.status }}</td>
                            <td class="text-xs-center">{{ props.item.date.formated_date }}</td>
                            <td class="text-xs-center"><v-btn flat :to="{ name: 'event-list-id' ,params:{ id : props.item.id }}"><v-icon>visibility</v-icon>  See details</v-btn></td>
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
                text: "Event Name",
                value: "event_name"
            },
            {
                sortable: false,
                text: "City",
                value: "address.city",
                align: 'right'
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
                value: "status",
                align: 'right'
            }
        ],
        events_details: [
            {
                event_name: "Loading...",
                address: {
                city: "Loading..."
                },
                date: "",
                status: "Loading..."
            }
        ]
    }),
    methods: {
        toggleAll () {
            if (this.selected.length) this.selected = []
            else this.selected = this.events_details.slice()
        },
        changeSort (column) {
            if (this.pagination.sortBy === column) {
                this.pagination.descending = !this.pagination.descending
            } else {
                this.pagination.sortBy = column
                this.pagination.descending = false
            }
        }
    },
    mounted() {
        axios({ method: "GET", url: this.api_url, headers: { "content-type": "application/json" } }).then(
            result => {
                this.events_details = result.data
            },
            error => {
                console.error(error);
            }
        );
    },
};
</script>

<style> 

    td{
        padding: 0 30px;
    }
    
</style>
