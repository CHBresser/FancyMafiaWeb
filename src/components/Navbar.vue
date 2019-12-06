<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      variant="light"
      :class="{ shadow: shadow }"
    >
      <b-navbar-brand to="/">
        Fancy Mafia
        <img src="/assets/images/FMLogo.png" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/commands">Commands</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  props: {
    shadow: Boolean
  }
});
</script>

<style scoped type="scss">
.shadow {
  -webkit-box-shadow: 6px 14px 20px -8px #000000;
  box-shadow: 6px 14px 20px -8px #000000;
}
</style>
