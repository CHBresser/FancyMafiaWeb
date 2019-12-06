<template>
  <div id="app">
    <b-container>
      <Navbar shadow />
      <b-row class="pr-3">
        <router-view />
      </b-row>
    </b-container>
  </div>
</template>
<script type="ts">
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>
