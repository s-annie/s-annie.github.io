<template>
  <v-html>
    <div>
      <!-- <img src="../../content/images/moon.jpg" class="article-header"/> -->
    </div>
    <div v-for="p in articles" :key="p.date">
      <v-container fill-height class="post-area">
        <v-row no-gutters align="start">
          <div v-for="tag in p.tags" :key="tag" class="post-tag-group">
            <v-btn small outlined color="pink accent-2" class="post-tag">{{ tag }}</v-btn>
          </div>
        </v-row>
        <v-row no-gutters align="start">
          <!-- <nuxt-link :to="'/articles/'+p.slug" style="text-decoration: none;">
            <p class="post-title">{{ p.title }}
            </p>
          </nuxt-link> -->
          <a :href="'/articles/'+p.slug" style="text-decoration: none;">
            <p class="post-title">{{ p.title }}
            </p>
          </a>
        </v-row>
        <v-row align="start" no-gutters>
          <v-icon class="post-date-icon">mdi-calendar-month</v-icon>
          <p class="post-date">{{ p.date }}</p>
        </v-row>
        <v-row no-gutters>
          <v-col v-if="p.image" />
          <v-col>
            <v-row no-gutters>
              <p class="post-excerpt"><nuxt-content :document="{ body: p.excerpt }" style="font-family: 'RaleWay';" /></p>
              <!-- <p class="post-excerpt">{{ p.excerpt }}</p> -->
            </v-row>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-divider class="post-divider"></v-divider>
        </v-row>
      </v-container>  
    </div>
    <v-row>
      <v-spacer></v-spacer>
      <a v-if="nextPage" :href="'/articles/page/2' " style="text-decoration: none;" >
        <p class="next-page"> >> Next page</p>
      </a>
    </v-row>
  </v-html>
</template>

<script>
// import remark from "remark"
// import excerpt from "remark-excerpt"

export default {
  layout: 'articles',
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
  async asyncData ({ $content, params}) {
    const tenArticles = await $content('articles')
                        .sortBy("date", 'desc')
                        .limit(10)
                        .fetch()
    const nextPage = tenArticles.length === 10
    const articles = nextPage ? tenArticles.slice(0, -1) : tenArticles

    return { nextPage, articles }
  },
  // methods: {
  //   getExcerpt(p) {
  //     const result = remark().use(excerpt).process(p)
  //     return result
  //   }
  // }
}
</script>

<style>
.v-application code {
  all: unset;
  font-family: monospace;
}
.nuxt-content p {
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
.v-btn {
  transform: scale(0.92);
}
.post-area {
  padding: auto;
  /* background:#ECEFF1; */
}
.post-title {
  margin-top: 3px; 
  font-family: 'Noto Sans SC', monospace, sans-serif;
  font-size: 24px;
  color: black;
  /* margin-bottom: -1px; */
  margin-left: -12px;
}
.post-date-icon {
  margin-top: -12px;
  margin-right: 5px;
}
.post-date{
  margin-top: -12px;
  font-family: Raleway;
  font-size: 15px;
}
.post-tag-group{
  text-align: left;
  margin-left: -3px;
}
.post-tag {
  font-family: monospace;
}
.post-divider {
  margin-bottom: 7px;
}
.post-excerpt {
  font-family: 'Roboto';
}
.next-page {
  font-family: RaleWay;
  align-content: right;
  color: black;
}
.article-header {
    position: relative;
    display: inline-block;
    width: 100%;
    height: auto;
}
</style>
