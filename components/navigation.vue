<template>
  <v-main>
    <v-tabs left >
      <v-tab class="pa-0 ma-0" style="min-width:0px" />
      <v-tab href="/">Home</v-tab>
      <v-tab href="/articles">Articles</v-tab>
      <v-tab>Gallery</v-tab>
      <v-tab>About</v-tab>
      <v-spacer></v-spacer>
      <v-tab disabled style="color: black; font-family: RaleWay;">The robots of dawn</v-tab>
    </v-tabs>
  </v-main>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style scoped>
.v-tab {
  font-family: RaleWay;
}
</style>
