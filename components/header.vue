<template>
    <div class="blog-header">
      <img class="header-responsive" src="../content/images/header.png" />
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.blog-header {
    position: relative;
    display: inline-block;
}
.blog-title {
    position: absolute;
    left: 400px;
    top: 200px;
    font-family: 'Roboto';
    font-size: 36px;
}
.header-responsive {
  width: 100%;
  height: auto;
}
</style>
