<template>
  <div>
    <h1>{{id.post}}</h1>
    <h1>{{title}}</h1>
    <h1>{{excerpt}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params,
      title: this.$route.query.title,
      excerpt: this.$route.query.excerpt
    };
  }
};
</script>