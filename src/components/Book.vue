<template>
  <div class="book">
    <div class="upvote">
      <span>Upvoted: {{ book.upvotes }} times</span>
      <button v-if="!book.upvoted" @click="upvote">Upvote</button>
      <button v-else disabled>Upvoted</button>
    </div>
    <h1 class="title">{{ book.title }}</h1>
    <div class="author">{{ book.author }}</div>

    <img :src="book.cover" />

    <h3>Synposis</h3>

    <div class="synopsis">
      {{ book.synopsis }}
    </div>
    <div class="rating">{{ book.rating }} / 10</div>
  </div>
</template>

<script>
export default {
  name: "Book",

  data() {
    return {
      book: {},
    };
  },

  created() {
    this.getBook();
  },

  methods: {
    async getBook() {
      await fetch("http://localhost:3000/books/" + this.$route.params.slug)
        .then((response) => response.json())
        .then((data) => {
          this.book = data;
        });
    },
  },
};
</script>

<style lang="scss">
.book {
  padding: 20px;

  .title {
    margin: 0;
  }
  .author {
  }

  .synopsis {
  }
  img {
  }
}
</style>
