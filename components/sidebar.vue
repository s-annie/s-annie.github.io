<template>
  <v-main>
    <v-content>Archives</v-content>
    <v-list-group no-action sub-group>
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title>2021</v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item>
        <v-list-item-title>2021-9 (2)</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>2021-8 (3)</v-list-item-title>
      </v-list-item>
    </v-list-group>
    <v-content>debug</v-content>
  </v-main>
</template>


<script>
export default {
  layout: "articles",
  name: "Sidebar",
  async asyncData ({ $content, params }) {
    const query = await $content('articles').sortBy("date", 'desc').limit(10)
    const articles = await query.fetch()
    return { articles }
  },
}
</script>
