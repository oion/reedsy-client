<template>
  <div class="book-list-item">
    <span class="position">
      <span>{{ positionTop }}</span>
    </span>

    <router-link :to="{ name: 'Book', params: { slug: book.slug } }"
      ><img :src="book.cover"
    /></router-link>

    <div class="book-info">
      <h3 class="title">
        <router-link :to="{ name: 'Book', params: { slug: book.slug } }">{{
          book.title
        }}</router-link>
      </h3>
      <div class="author">{{ book.author }}</div>

      <div class="synopsis">
        <p>
          {{ book.synopsis?.slice(0, 200) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReedsyBooksListItem",

  props: {
    book: {
      required: true,
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
  computed: {
    positionTop() {
      return this.position + 1;
    },
  },
};
</script>

<style lang="scss">
$yellowLight: #faf9f4;
$yellow: #efbe0c;
$grayDark: #232321;

.book-list-item {
  background: $yellowLight;
  padding: 20px;
  position: relative;
  border-radius: 10px;
  .position {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid $yellow;
    border-radius: 50%;

    span {
      font-weight: bold;
      color: $yellow;
    }
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0 auto;
    max-width: 150px;
    aspect-ratio: 3/4;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(#000, 0.1);
  }

  .title {
    margin: 1em 0 0;
    font-size: 1.2em;
    a {
      color: $grayDark;
      text-decoration: none;
    }
  }
}
</style>
