<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout justify-center wrap>
            <v-flex xs12 md12>
                <v-card>
                    <v-card-title>
                        <span class="headline">Create New Event</span>
                    </v-card-title>
                    <v-form>
                        <v-container grid-list-xl text-xs-center>
                            <v-layout row wrap>
                                <v-flex xs12 md6>
                                    <v-text-field label="Event Name" v-model="event.event_name"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field label="Venue Name" v-model="event.venue_name"/>
                                </v-flex>
                                <!-- Addresss -->
                                <v-flex xs12 md6>
                                    <v-text-field v-model="event.address.line_address1" label="Line address 1"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field v-model="event.address.line_address2" label="Line address 2"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field v-model="event.address.country" label="Country"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field v-model="event.address.state" label="State"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field v-model="event.address.city" label="City"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field v-model="event.address.zip_code" label="Zip code"/>
                                </v-flex>
                                <v-flex xs12>
                                    <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
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
                                <v-flex xs12 md6>
                                    <v-text-field v-model="event.address.description" label="Address Description"/>
                                </v-flex>

                                <!-- Event generalities -->
                                <v-flex xs12 md6>
                                    <v-select :items="event_type" v-model="event.event_type" label="Event Type"></v-select>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-select :items="event_attire" v-model="event.event_attire" label="Event Attire"></v-select>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-select :items="revenue_generation" v-model="event.revenue_generation" label="Revenue Generation"></v-select>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field v-model="event.capacity" label="Capacity"/>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-select v-model="event.status" :items="status" label="Status"></v-select>
                                </v-flex>
                                <v-flex xs12>
                                    <v-textarea v-model="event.description" label="Description"/>
                                </v-flex>

                                <v-flex xs12 md6>
                                    <v-select v-model="event.date.time_zone" :items="time_zone" label="Time Zone"></v-select>
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
                                    >
                                        <v-text-field
                                        slot="activator"
                                        v-model="event.date.formated_date"
                                        label="Start Date"
                                        append-icon="today"
                                        readonly
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
                                    >
                                        <v-text-field
                                            slot="activator"
                                            v-model="event.date.time"
                                            label="Start Time"
                                            append-icon="schedule"
                                            readonly
                                        ></v-text-field>
                                        
                                        <v-time-picker v-model="event.date.time" actions>
                                            <v-spacer></v-spacer>
                                            <v-btn flat color="primary" @click="modal2 = false">Cancel</v-btn>
                                            <v-btn flat color="primary" @click="$refs.dialog.save(event.date.time)">OK</v-btn>
                                        </v-time-picker>
                                    </v-dialog>
                                </v-flex>

                                <!-- image area -->
                                <v-flex xs12>
                                    <v-card class="pa-4">
                                        <label><v-icon>attach_file</v-icon>Event Image: </label>
                                        <input
                                        type="file"
                                        :multiple="false"
                                        ref="fileInput"
                                        @change="onFileChange"
                                        >
                                    </v-card>
                                </v-flex>

                                <v-flex xs12 text-xs-right>
                                    <v-btn
                                        class="mx-0 font-weight-light"
                                        color="success"
                                        @click="submitData()"
                                        
                                    >Save Event</v-btn>
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
import axios from "axios";

export default {
    data() {
        return {
        api_url: "https://ox8usqk4cd.execute-api.us-east-2.amazonaws.com/hackathon/events",
        event: {
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
            venue_name: "",
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
                time: "",
                time_zone: "",
                year: "123"
            },
            status: "",
            pictures: ["none"],
            event_image: "",
            event_attire: "",
            event_type: "",
            revenue_generation: ""
        },
        event_type: ["Online", "Physical"],
        event_attire: ["Casual", "Cooktail", "Formal", "Smart Casual"],
        revenue_generation: ["Auction", "Dinner", "Gala", "Festival", "Trade Show"],
        status: ["Pending", "Not started", "In progress", "Finished"],
        time_zone: ["Pacific", "Central", "Mountain", "Eastern"],
        reactive: true,
        menu2: false,
        modal2: false,
        };
    },
    methods: {
        submitData() {
            axios({ method: "POST", url: this.api_url, headers: { "content-type": "application/json" }, data: this.event, body: JSON.stringify(this.event)}).then(()=>{
                debugger
                router.push('/event-list')
            });
        },
        onFileChange($event) {
            const files = $event.target.files || $event.dataTransfer.files;
            const form = this.getFormData(files);
            this.getBase64([...files][0]);
            this.$emit("input", this.event.event_image);
            this.$emit("formData", form);
        },
        getBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => (this.event.event_image = reader.result);
                reader.onerror = error => reject(error);
            });
        },
        getFormData(files) {
            const data = new FormData();
            return data;
        }
    }
};
</script>
