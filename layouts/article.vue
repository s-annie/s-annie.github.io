<template>
  <v-app>
    <v-container>
      <v-row no-gutters>
        <Navigation />
      </v-row>
      <v-row>
          <Post />
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
  layout: 'Articles',
  components: {
    // Navigation,
    Header,
    Post,
    Footer,
    Sidebar
  },
  head() {
    return {
      script: [
        { src: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS-MML_SVG" }
      ],
    }
  },
  created () {
    if (process.browser) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          processEscapes: true
        }
      })
    }
  }
}
</script>

<style>
.header-image {
  text-align: center;
  margin-left: 150px;
  margin-top: 100px;
}
</style>
