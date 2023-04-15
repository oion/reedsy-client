<template>
  <div>
    <h1>Top Book of All Time</h1>
    <div class="top-books">
      <TopBooksList />
    </div>
  </div>
</template>

<script>
import TopBooksList from "./TopBooksList.vue";
export default {
  name: "PageTopBooks",
  components: {
    TopBooksList,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss">
.top-books {
}
</style>
