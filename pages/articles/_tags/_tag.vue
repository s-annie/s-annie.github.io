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
            <v-row class="post-descriptions" no-gutters>
              <p>{{ p.descriptions }}</p>
              <!-- <nuxt-link :to="p.slug">Read More</nuxt-link> -->
            </v-row>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <nuxt-content :document="p" />
        </v-row>
        <v-row no-gutters>
          <v-divider class="post-divider"></v-divider>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>

<script>
export default {
  layout: 'articles',
  async asyncData ({ $content, params }) {
    const query = await $content('articles').where({date: '2021/09/19'}).fetch()
    const articles = await query.fetch()
    return { articles }
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
