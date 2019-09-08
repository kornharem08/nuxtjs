<template>
  <div>
    <main class="main-content">
    <TheHeader />
    <nuxt />
    </main>
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
};
</script>
<style>
body {
 font-family: 'Chilanka', cursive;
}

/* .main-content{
  margin-top: 5.5rem;
} */

</style>
