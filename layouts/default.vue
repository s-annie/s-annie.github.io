<template>
  <v-app>
    <v-container>
      <v-row no-gutters>
        <v-col><Navigation /></v-col>
      </v-row>
      <v-row no-gutters>
        <v-col><Header /></v-col>
      </v-row>
      <v-row>
        <Nuxt />
      </v-row>
      <v-row>
        <Footer />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Header from '../components/header.vue'
import Navigation from '../components/navigation.vue'
import Post from '../components/post.vue'
import Footer from '../components/footer.vue'
import Sidebar from '../components/sidebar.vue'

export default {
  components: {
    Navigation,
    Header,
    Footer,
    Sidebar
  },
}
</script>

<style>
.header-image {
  text-align: center;
  margin-left: 150px;
  margin-top: 100px;
}
</style>
