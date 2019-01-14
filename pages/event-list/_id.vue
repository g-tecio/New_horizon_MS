<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout justify-center wrap>
            <v-flex xs12 md12>
                <v-card>
                    <v-card-title>
                        <span class="headline">Event Details</span>
                    </v-card-title>
                    <v-img :src="event.event_image" aspect-ratio="2"></v-img>
                    <v-form>
                        <v-container grid-list-xl text-xs-center>
                            <v-layout row wrap>
                                <v-flex xs12 md6>
                                    <v-text-field disabled label="Event Name" v-model="event.event_name"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field disabled label="Venue Name" v-model="event.venue_name"/>
                                </v-flex>
                                <!-- Addresss -->
                                <v-flex xs12 md6>
                                    <v-text-field disabled v-model="event.address.line_address1" label="Line address 1"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field disabled v-model="event.address.line_address2" label="Line address 2"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field disabled v-model="event.address.country" label="Country"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field disabled v-model="event.address.state" label="State"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field disabled v-model="event.address.city" label="City"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field disabled v-model="event.address.zip_code" label="Zip code"/>
                                </v-flex>
                                <v-flex xs12>
                                    <v-img disabled :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
                                        <v-layout pa-2 column fill-height class="lightbox white--text">
                                        <v-spacer></v-spacer>
                                        <v-flex shrink>
                                            <div class="subheading">Add Location</div>
                                        </v-flex>
                                        </v-layout>
                                    </v-img>
                                </v-flex>
                            </v-layout>

                            <v-layout row wrap>
                                <!-- Event generalities -->
                                <v-flex xs12 md6>
                                    <v-text-field disabled v-model="event.address.description" label="Address Description"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field disabled v-model="event.event_type" label="Event Type"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field disabled v-model="event.event_attire" label="Attire"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field disabled v-model="event.revenue_generation" label="Revenue generation"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field disabled v-model="event.capacity" label="Capacity"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-select disabled v-model="event.status" label="Status"></v-select>
                                </v-flex>
                                <v-flex xs12>
                                    <v-textarea disabled v-model="event.description" label="Description"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field disabled v-model="event.date.time_zone" label="Time Zone"/>
                                </v-flex>

                                <v-flex xs6 md3>
                                    <v-menu
                                        ref="menu"
                                        :close-on-content-click="false"
                                        v-model="menu"
                                        :nudge-right="40"
                                        :return-value.sync="date"
                                        lazy
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        min-width="290px"
                                        disabled
                                    >
                                        <v-text-field
                                        slot="activator"
                                        v-model="event.date.formated_date"
                                        label="Start Date"
                                        append-icon="today"
                                        readonly
                                        disabled
                                        ></v-text-field>
                                        <v-date-picker v-model="event.date.formated_date" no-title scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                        <v-btn flat color="primary" @click="$refs.menu.save(event.date.formated_date)">OK</v-btn>
                                        </v-date-picker>
                                    </v-menu>
                                </v-flex>
                                <v-flex xs6 md3>
                                    <v-dialog
                                        ref="dialog"
                                        v-model="modal2"
                                        :return-value.sync="time"
                                        persistent
                                        lazy
                                        full-width
                                        width="290px"
                                        disabled
                                    >
                                        <v-text-field
                                        slot="activator"
                                        v-model="event.date.time"
                                        label="Start Time"
                                        append-icon="schedule"
                                        readonly
                                        disabled
                                        ></v-text-field>
                                        
                                        <v-time-picker disabled v-model="event.date.time" actions>
                                        <v-spacer></v-spacer>
                                        <v-btn flat color="primary" @click="modal2 = false">Cancel</v-btn>
                                        <v-btn flat color="primary" @click="$refs.dialog.save(event.date.time)">OK</v-btn>
                                        </v-time-picker>
                                    </v-dialog>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
        id: 0,
        api_url:"https://ox8usqk4cd.execute-api.us-east-2.amazonaws.com/hackathon/events/",
        event:{
            event_name: "",
            address: {
                line_address1: "",
                line_address2: "",
                city: "",
                state: "",
                country: "",
                zip_code: "",
                description: ""
            },
            venue_name: "asd",
            capacity: 0,
            description: "",
            location: {
                latitude: 24,
                longitude: 102
            },
            date: {
                day: "07",
                formated_date: "",
                month: "07",
                time: "456",
                time_zone: "123",
                year: "123"
            },
            status: "",
            pictures: ["none"],
            event_image: "",
            event_attire: "",
            event_type: "",
            revenue_generation: ""
        },
        reactive: true,
        };
    },
    created(params) {
            this.id = this.$route.params.id;
            axios.get(this.api_url + this.id).then(res => {
            this.event = res.data;
        });
    }
};
</script>