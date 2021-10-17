<template>
  <v-main>
    <v-container>
    <v-row>
    <v-col cols="1"></v-col>
    <v-col cols="3">
    <v-row  no-gutters style="margin-bottom: 5px;">
      <v-col cols="1" no-gutters>
        <img src="../../content/icons/index.png" />
      </v-col>
      <v-col cols="4" no-gutters>
      <p class="p-index">目录</p>
      </v-col>
    </v-row>
    <div>
        <div v-for="t in post.toc" :key="t.depth">
          <div v-if="t.depth===1"  class="post-index-h1">
            <nuxt-link :to="`#${t.id}`" class="post-link"></nuxt-link>
           </div>
          <div v-if="t.depth===2"  class="post-index-h2">
            <nuxt-link :to="`#${t.id}`" class="post-link"><p style="color:black;margin-top:-5px">{{ t.text }}</p></nuxt-link>
           </div>
          <div v-if="t.depth===3"  class="post-index-h3">
            <nuxt-link :to="`#${t.id}`" class="post-link" ><p style="color:black;margin-top:-3px">{{ t.text }}</p></nuxt-link>
           </div> 
        </div>
    </div> 
    </v-col>
    <v-col cols="8">
      <v-row no-gutters align="start">
        <p class="post-title">{{ post.title }}</p>
      </v-row>
      <v-row align="start" no-gutters>
        <v-icon class="post-date-icon">mdi-calendar-month</v-icon>
        <p class="post-date">{{ post.date }}</p>
      </v-row>
    <nuxt-content :document="post" />
    </v-col>
    </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  layout: 'article',
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

<style lang="scss">

.post-tag {
  margin-left: 10px;
}
.post-title {
  font-family: 'Noto Sans SC', monospace, sans-serif;
  font-size: 26px;
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
  margin-bottom: 10px;
}
.nuxt-content h2 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Noto Sans SC', monospace, sans-serif;
  font-size: 24px;
  font-weight: 200;
  border-left: 6px solid #696969;
  text-indent: 5px;
  border-bottom: 6px solid #696969;
}
.nuxt-content h3 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Noto Sans SC', monospace, sans-serif;
  font-size: 20px;
  font-weight: 200;
  border-bottom: 5px double #696969;
}
.nuxt-content h4 {
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: 'Noto Sans SC', monospace, sans-serif;
  font-size: 18px;
  font-weight: 200;
}
.post-index-h1 {
   color: black;
   margin-left: 10px;
}
.post-index-h2 {
   color: black;
   margin-left: 10px;
}
.post-index-h3 {
   color: black;
   margin-left: 20px;
}
.post-link {
    text-decoration: none;
    color: black;
    font-family: 'Noto Sans SC', RaleWay, sans-serif;
}
.p-index {
  margin-top: -5px;
  font-size: 20px;
  font-family: 'Noto Sans SC', RaleWay, sans-serif;
}

</style>
