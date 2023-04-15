<template>
  <div class="top-books-list">
    <TopBookItem
      v-for="(book, index) in books"
      :key="book.slug"
      :book="book"
      :position="index + 1"
    ></TopBookItem>
  </div>
</template>

<script>
import TopBookItem from "./TopBookItem.vue";
export default {
  name: "TopBooksList",
  components: {
    TopBookItem,
  },
  data() {
    return {
      books: [],
    };
  },

  created() {
    this.getBooks();
  },

  methods: {
    async getBooks() {
      await fetch("http://localhost:3000/books")
        .then((response) => response.json())
        .then((data) => (this.books = data.books));
    },
  },
};
</script>

<style lang="scss">
.top-books-list {
}
</style>
