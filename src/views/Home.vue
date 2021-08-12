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
  </v-container>
</template>

<script>
import { mdiMagnify } from "@mdi/js";
import Helpers from "../helpers/Helpers.js";
export default {
  name: "Home",
  data() {
    return {
      mdiMagnify: mdiMagnify,
      search_value: "",
    };
  },
  methods: {
    getLink() {
      console.log("link", this.search_value);
      const valid_url = Helpers.validURL(this.search_value);
      console.log("d23ef", valid_url);
      if (valid_url) {
        console.log("valid url", this.search_value);
      } else {
        console.log("invalid url", this.search_value);
      }
    },
  },
};
</script>
