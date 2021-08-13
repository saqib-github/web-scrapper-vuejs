<template>
  <v-container>
    <v-container>
      <v-layout wrap row>
        <v-flex xs12 md12 class="pt-6">
          <h1>Welcome</h1>
          <p class="pl-10">
            This is web scrapping application you can paste your link in the
            search bar to start scrap a website.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- ......................... -->
    <v-container>
      <v-layout wrap row justify-space-between>
        <v-flex xs12 md7>
          <v-text-field
            class="pt-5"
            placeholder="Paste your link here"
            outlined
            clearable
            :prepend-inner-icon="mdiMagnify"
            v-model="search_value"
          ></v-text-field>
          <v-btn dark x-large color="pink" @click="getLink"> SEARCH </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- ......................... -->
    <v-container>
      <v-row>
        <v-col cols="10">
          <div v-if="title && price && img_url">
            <v-card height="650" width="350">
              <v-img contain class="white--text" height="300px" :src="img_url">
              </v-img>
              <v-card-title>
                <div class="mx-5">
                  <span class="title blue--text">Title: {{ title }} </span
                  ><br />
                  <v-rating
                    readonly
                    small
                    dense
                    background-color="orange"
                    color="orange"
                  ></v-rating>
                  <span class="title"> price: {{ price }} </span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn large rounded depressed :color="color" class="mx-auto white--text"
                  >ADD TO MY SHOP</v-btn
                >
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mdiMagnify } from "@mdi/js";
import Helpers from "../helpers/Helpers.js";
import Swal from "sweetalert2";
export default {
  name: "Home",
  data() {
    return {
      mdiMagnify: mdiMagnify,
      search_value: "",
      color: "pink",
      // v-models for set product values
      title: "",
      price: "",
      img_url: "",
    };
  },
  methods: {
    getLink() {
      // if (this.search_value) {
      //   const url = new URL(this.search_value);
      //   const valid_url = Helpers.validURL(url);
      //   console.log("valid", valid_url);
      //   console.log("!valid", !valid_url);
      //   if (valid_url) {
      //     Swal.fire("Thank You", "Please Wait ....", "success");
      //     let url = "http://localhost:5000/web";
      //     let data_url = { data_url: this.search_value };
      //     console.log("data_url", data_url);
      //     Helpers.getData(url, data_url).then((response) => {
      //       console.log("response", response);
      //       const data = response.data;
      //       this.title = data.title;
      //       this.price = data.price;
      //       this.img_url = data.image;
      //     });
      //     console.log("valid url", this.search_value);
      //   }
      //   if (!valid_url) {
      //     Swal.fire("Opps", "Url Invalid", "error");
      //   }
      // }
      try {
        const url = new URL(this.search_value);
        Swal.fire("Thank You", `Please Wait ....${url}`, "success");
        let r_url = "http://localhost:5000/web";
        let data_url = { data_url: this.search_value };
        console.log("data_url", data_url);
        Helpers.getData(r_url, data_url).then((response) => {
          console.log("response", response);
          const data = response.data;
          this.title = data.title;
          this.price = data.price;
          this.img_url = data.image;
        });
      } catch (e) {
        Swal.fire("invalid", e.toString(), "error");
      }
      if (!this.search_value) {
        Swal.fire("Opps", "Please Enter link", "error");
      }
    },
  },
};
</script>
