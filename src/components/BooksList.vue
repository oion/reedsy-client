<template>
  <div class="books-list">
    <BookListItem
      v-for="(book, index) in topBooks"
      :key="book.slug"
      :book="book"
      :position="index"
    ></BookListItem>
  </div>
</template>

<script>
import BookListItem from "./BooksListItem.vue";
export default {
  name: "BooksList",
  components: {
    BookListItem,
  },
  data() {
    return {
      books: [],
    };
  },

  created() {
    this.getBooks();
  },

  mounted() {},
  methods: {
    async getBooks() {
      await fetch("http://localhost:3000/books")
        .then((response) => response.json())
        .then((data) => (this.books = data.books));
    },
  },
  computed: {
    topBooks() {
      return this.books
        .sort(function (a, b) {
          return a.upvotes > b.upvotes;
        })
        .slice(0, 3);
    },
  },
};
</script>

<style lang="scss">
.books-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
</style>
