<template>
  <v-main>
    <v-row no-gutters align="start">
      <p class="post-title">{{ post.title }}</h1>
    </v-row>
    <v-row align="start" no-gutters>
      <v-icon class="post-date-icon">mdi-calendar-month</v-icon>
      <p class="post-date">{{ post.date }}</p>
    </v-row>
    <nuxt-content :document="post" />
  </v-main>
</template>

<script>
export default {
  layout: 'articles',
  async asyncData ({ $content, params }) {
    const post = await $content('articles', params.slug || 'index').sortBy('date').fetch()
    post.slug = params.slug
    return { post }
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
  },
//  beforeMount(){
//     window.location.reload();
//  }
}
</script>

<style>
.post-tag {
  margin-left: 10px;
}
.post-title {
  font-family: 'Noto Sans SC', monospace, sans-serif;
  font-size: 24px;
  color: black;
  margin-bottom: -1px;
}
.post-date-icon {
  margin-right: 5px;
}
.post-date{
  font-family: Raleway;
  font-size: 15px;
}
.nuxt-content p, h1 {
  font-family: 'Noto Sans SC', RaleWay, sans-serif;
}
.nuxt-content h1 {
  margin-top: 5px;
  margin-bottom: 5px;
}
.nuxt-content h2 {
  margin-top: 10px;
  margin-bottom: 5px;
}
.nuxt-content h3 {
  margin-top: 10px;
  margin-bottom: 5px;
}
.nuxt-content h4 {
  margin-top: 10px;
  margin-bottom: 5px;
}
</style>
