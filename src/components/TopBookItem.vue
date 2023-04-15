<template>
  <div class="top-books-item">
    <router-link :to="{ name: 'Book', params: { slug: book.slug } }"
      ><img :src="book.cover"
    /></router-link>

    <div class="book-info">
      <h3 class="title">
        <router-link :to="{ name: 'Book', params: { slug: book.slug } }"
          ><span class="position">{{ position }}</span
          >. {{ book.title }}</router-link
        >
      </h3>
      <div class="author">{{ book.author }}</div>
      <div class="synopsis">{{ book.synopsis }}</div>

      <div class="upvote">
        <button
          @click="upvote"
          :class="[
            'button__upvote',
            { 'button__upvote--upvoted': book.upvoted },
          ]"
        >
          <span v-if="!book.upvoted">Upvote</span>
          <span v-else>Upvoted</span>
        </button>

        <span>Upvoted: {{ book.upvotes }} times</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBookItem",
  props: {
    book: {
      type: Object,
    },
    position: {
      type: Number,
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss">
$yellowLight: #faf9f4;
$yellow: #efbe0c;
$white: #fff;

.top-books-item {
  display: flex;
  padding: 30px;
  gap: 20px;

  &:nth-child(2n) {
    background: $yellowLight;
  }
  &:nth-child(2n + 1) {
    background: #fff;
  }

  .book-info {
  }

  img {
    max-width: 150px;
    aspect-ratio: 3/4;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(#000, 0.1);
  }
  .title {
    margin: 0;

    a {
      text-decoration: none;
    }
  }
  .author {
    margin-bottom: 1em;
  }
  .synopsis {
    margin-bottom: 1em;
  }
  .upvote {
    display: flex;
    gap: 20px;
  }
  .button__upvote {
    border: 2px solid $yellow;
    background: $yellow;
    color: $white;
    border-radius: 5px;
    padding: 5px 10px;
    transition: background 0.3s ease;
    font-weight: bold;
    &:hover {
      cursor: pointer;
      background: $yellowLight;
      color: $yellow;
    }
    &--upvoted {
      background: $yellowLight;
      color: $yellow;
    }
  }
}
</style>
