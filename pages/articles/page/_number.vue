<template>
    <v-main>
    <div v-for="p in articles" :key="p.date">
      <v-container fill-height class="post-area">
        <v-row no-gutters align="start">
          <div v-for="tag in p.tags" :key="tag" class="post-tag-group">
            <v-btn small outlined color="pink accent-2" class="post-tag">{{ tag }}</v-btn>
          </div>
        </v-row>
        <v-row no-gutters align="start">
          <nuxt-link :to="`/articles/` + p.slug" style="text-decoration: none;">
            <p class="post-title">{{ p.title }}
            </p>
          </nuxt-link>
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
            </v-row>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-divider class="post-divider"></v-divider>
        </v-row>
      </v-container>  
    </div>
    <v-row>
      <nuxt-link :to="prevLink" style="text-decoration: none;" >
        <p class="prev-link" > Prev page << </p></nuxt-link>
      <v-spacer></v-spacer>
      <nuxt-link v-if="nextPage" :to="`/articles/page/${ pageNo + 1 }`" style="text-decoration: none;">
        <p class="prev-link" > >> Next page</p></nuxt-link>
    </v-row>
    </v-main>
</template>>

<script>
export default {
    layout: 'articles',
    async asyncData({ $content, params}) {
        const pageNo = params.number;
        const tenArticles = await $content('articles')
                            .sortBy("date", 'desc')
                            .limit(10)
                            .skip(9 * (pageNo - 1))
                            .fetch()
        const nextPage = tenArticles.length === 10
        const articles = nextPage ? tenArticles.slice(0, -1) : tenArticles
        return { nextPage, articles, pageNo }
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
    computed: {
        prevLink() {
            return this.pageNo === 2 ?  `/articles/page/${this.pageNo - 1}` : `/articles`
        }
    },
}
</script>

<style>
.prev-link {
  font-family: RaleWay;
  align-content: right;
  color: black;
}
</style>